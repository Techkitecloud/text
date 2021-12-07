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
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import History from '@tiptap/extension-history'
import Blockquote from '@tiptap/extension-blockquote'
import Codeblock from '@tiptap/extension-code-block'
import Placeholder from '@tiptap/extension-placeholder'
import { Editor } from '@tiptap/core'
import { Strong, Italic, Strike, Link } from './marks'
// import { Image, PlainTextDocument, ListItem, BulletList } from './nodes'
import MarkdownIt from 'markdown-it'
import taskLists from 'markdown-it-task-lists'
import { translate as t } from '@nextcloud/l10n'

import 'proxy-polyfill'

import { MarkdownSerializer, defaultMarkdownSerializer } from 'prosemirror-markdown'

const loadSyntaxHighlight = async (language) => {
	const languages = [language]
	const modules = {}
	for (let i = 0; i < languages.length; i++) {
		try {
			const lang = await import(/* webpackChunkName: "highlight/[request]" */'highlight.js/lib/languages/' + languages[i])
			modules[languages[i]] = lang.default
		} catch (e) {
			// No matching highlighing found, fallback to none
			return undefined
		}
	}
	if (Object.keys(modules).length === 0 && modules.constructor === Object) {
		return undefined
	}
	return { languages: modules }
}

const createEditor = ({ content, onCreate, onUpdate, extensions, enableRichEditing, languages, currentDirectory }) => {
	let richEditingExtensions = []
	if (enableRichEditing) {
		richEditingExtensions = [
			Heading,
			Strong,
			Italic,
			Strike,
			Link.configure({ openOnClick: true }),
			Blockquote,
			Codeblock.extend({ name: 'code_block' }),
			/*
			new BulletList(),
			new ListItem(),
			new Image({ currentDirectory }),
			*/
			Placeholder.configure({
				emptyNodeClass: 'is-empty',
				placeholder: t('text', 'Add notes, lists or links …'),
				showOnlyWhenEditable: true,
			}),
			// TODO: replace this
			// https://github.com/ueberdosis/tiptap/tree/main/demos/src/Experiments/TrailingNode
			// new TrailingNode({ node: 'paragraph', notAfter: ['paragraph'], }),
		]
	} else {
		richEditingExtensions = [
			// disable our custom extensions for now
			// PlainTextDocument,
			// FIXME: Do we want to use CodeBlockLowlight instead?
			// new CodeBlockHighlight({ ...languages, }),
		]
	}
	extensions = extensions || []
	return new Editor({
		content,
		onCreate,
		onUpdate,
		extensions: [
			Document,
			Paragraph,
			Text,
			History,
			...richEditingExtensions,
		].concat(extensions),
	})
}

const markdownit = MarkdownIt('commonmark', { html: false, breaks: false })
	.enable('strikethrough')
	.use(taskLists, { enable: true, labelAfter: true })

const SerializeException = function(message) {
	this.message = message
}
const createMarkdownSerializer = (_nodes, _marks) => {
	const nodes = Object
		.entries(_nodes)
		.filter(([, node]) => node.toMarkdown)
		.reduce((items, [name, { toMarkdown }]) => ({
			...items,
			[name]: toMarkdown,
		}), {})

	const marks = Object
		.entries(_marks)
		.filter(([, node]) => node.toMarkdown)
		.reduce((items, [name, { toMarkdown }]) => ({
			...items,
			[name]: toMarkdown,
		}), {})
	return {
		serializer: new MarkdownSerializer(
			{ ...defaultMarkdownSerializer.nodes, ...nodes },
			{ ...defaultMarkdownSerializer.marks, ...marks }
		),
		serialize(content, options) {
			return this.serializer.serialize(content, { ...options, tightLists: true })
				.split('\\[').join('[')
				.split('\\]').join(']')
		},
	}
}

const serializePlainText = (tiptap) => {
	const doc = tiptap.getJSON()

	if (doc.content.length !== 1 || typeof doc.content[0].content === 'undefined' || doc.content[0].content.length !== 1) {
		if (doc.content[0].type === 'code_block' && typeof doc.content[0].content === 'undefined') {
			return ''
		}
		throw new SerializeException('Failed to serialize document to plain text')
	}
	const codeBlock = doc.content[0].content[0]
	if (codeBlock.type !== 'text') {
		throw new SerializeException('Failed to serialize document to plain text')
	}
	return codeBlock.text
}

export default createEditor
export { markdownit, createEditor, createMarkdownSerializer, serializePlainText, loadSyntaxHighlight }
