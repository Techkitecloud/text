/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import TipTapListItem from '@tiptap/extension-list-item'
import { wrappingInputRule, mergeAttributes } from '@tiptap/core'
import { Plugin } from 'prosemirror-state'
import { findParentNode, findParentNodeClosestToPos } from 'prosemirror-utils'
import { listInputRule } from '../commands'

const TYPES = {
	BULLET: 0,
	CHECKBOX: 1,
}

const getParentList = (schema, selection) => {
	return findParentNode(function(node) {
		return node.type === schema.nodes.list_item
	})(selection)
}

const ListItem = TipTapListItem.extend({

	name: 'list_item',

	addOptions() {
		return {
			nested: true,
		}
	},

	addAttributes() {
		return {
			done: {
				default: false,
			},
			type: {
				default: TYPES.BULLET,
			},
		}
	},

	draggable: false,

	content: 'paragraph block*',

	renderHTML({ node, HTMLAttributes }) {
		if (node.attrs.type === TYPES.BULLET) {
			return ['li', HTMLAttributes, 0]
		}
		const listAttributes = { class: 'checkbox-item' }
		const checkboxAttributes = { type: 'checkbox', class: '', contenteditable: false }
		if (node.attrs.done) {
			checkboxAttributes.checked = true
			listAttributes.class += ' checked'
		}
		return [
			'li',
			mergeAttributes(HTMLAttributes, listAttributes),
			[
				'input',
				checkboxAttributes,
			],
			[
				'label',
				0,
			],
		]
	},

	parseHTML: [
		{
			priority: 100,
			tag: 'li',
			getAttrs: el => {
				const checkbox = el.querySelector('input[type=checkbox]')
				return { done: checkbox && checkbox.checked, type: checkbox ? TYPES.CHECKBOX : TYPES.BULLET }
			},
		},
	],

	toMarkdown: (state, node) => {
		if (node.attrs.type === TYPES.CHECKBOX) {
			state.write(`[${node.attrs.done ? 'x' : ' '}] `)
		}
		state.renderContent(node)
	},

	addCommands() {
		return {
			bulletListItem: () => ({ commands }) => {
				return commands.toggleList('bullet_list', 'list_item')
			},
			todo_item: () => ({ chain, commands, state }) => {
				const schema = state.schema
				const selection = state.selection
				const $from = selection.$from
				const $to = selection.$to
				const range = $from.blockRange($to)

				if (!range) {
					return false
				}

				let parentList = getParentList(schema, selection)

				const start = (typeof parentList === 'undefined')
					? chain().bulletListItem()
					: chain()

				start
					.command(({ tr }) => {
						if (typeof parentList === 'undefined') {
							parentList = getParentList(schema, tr.selection)
						}

						if (typeof parentList === 'undefined') {
							return false
						}
						tr.setNodeMarkup(parentList.pos, schema.nodes.list_item, {
							type: parentList.node.attrs.type === TYPES.CHECKBOX ? TYPES.BULLET : TYPES.CHECKBOX,
						})
						tr.scrollIntoView()
					})
					.run()
			},
		}
	},

	addInputRules() {
		return [
			wrappingInputRule({
				find: /^\s*([-+*])\s(\[(x|X| ?)\])\s$/,
				type: TYPES.CHECKBOX,
				getAttributes: match => ({
					done: 'xX'.includes(match[match.length - 1]),
				}),
			}),
			listInputRule(/^\s*([-+*])\s([^\s[])$/, this.type),
		]
	},

	addProseMirrorPlugins() {
		return [
			new Plugin({
				props: {
					handleClick: (view, pos, event) => {
						const state = view.state
						const schema = state.schema

						const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY })
						const position = state.doc.resolve(coordinates.pos)
						const parentList = findParentNodeClosestToPos(position, function(node) {
							return node.type === schema.nodes.list_item
						})
						const isListClicked = event.target.tagName.toLowerCase() === 'li'
						if (typeof parentList === 'undefined' || parentList.node.attrs.type !== TYPES.CHECKBOX || !isListClicked) {
							return
						}

						const tr = state.tr
						tr.setNodeMarkup(parentList.pos, schema.nodes.list_item, { done: !parentList.node.attrs.done, type: TYPES.CHECKBOX })
						view.dispatch(tr)
					},
				},
			}),
		]
	},

})

export default ListItem
