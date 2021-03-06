/**
 * @copyright Copyright (c) 2021 Julien Veyssier <eneiluj@posteo.net>
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
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


import { randHash } from '../utils/'
import 'cypress-file-upload'
const randUser = randHash()

const ACTION_UPLOAD_LOCAL_FILE = 1
const ACTION_INSERT_FROM_FILES = 2
const ACTION_INSERT_FROM_LINK = 3

/**
 * Open the image action menu and click one action
 *
 * @param actionIndex position of the action to be clicked
 * @param callback what happens once it's been clicked
 */
const clickOnImageAction = (actionIndex, callback) => {
	cy.get('#viewer .action-item.submenu')
		.should('not.have.class', 'action-item--open')
		.click()
		.should('have.class', 'action-item--open')

	// get the popover ID to be able to find the related DOM element
	cy.get('#viewer .action-item.submenu > div.v-popover > .trigger')
		.should('have.attr', 'aria-describedby')
			.should('contain', 'popover_')
			.then((popoverId) => {
				cy.log('Click on the action entry')
				cy.get('div#' + popoverId)
					.should('have.class', 'open')
					.find('li:nth-child(' + actionIndex + ')').click()
				// our job here is done
				callback(popoverId)
			})
}

/**
 * Check if an image is visible in the document
 *
 * @param documentId file ID of the current document
 * @param imageName file name to be checked
 */
const checkImage = (documentId, imageName) => {
	cy.log('Check the image is visible and well formed')
	cy.get('#editor .ProseMirror div.image[data-src="text://image?imageFileName=' + imageName + '"]')
		.should('be.visible')
		.find('img')
			.should('have.attr', 'src')
				.should('contain', 'apps/text/image?documentId=' + documentId)
				.should('contain', 'imageFileName=' + imageName)
}

/**
 * Wait for the image insertion request to finish and check if the image is visible
 *
 * @param requestAlias Alias of the request we are waiting for
 */
const waitForRequestAndCheckImage = (requestAlias) => {
	cy.wait('@' + requestAlias).then((req) => {
		// the name of the created file on NC side is returned in the response
		const fileName = req.response.body.name
		const documentId = req.response.body.documentId
		cy.wait(2000)
		checkImage(documentId, fileName)
		cy.wait(1000)
		cy.screenshot()
	})
}

describe('Test all image insertion methods', () => {
	before(() => {
		// Init user
		cy.nextcloudCreateUser(randUser, 'password')
		cy.login(randUser, 'password')

		// Upload test files to user's storage
		cy.uploadFile('test.md', 'text/markdown')
		cy.uploadFile('github.png', 'image/png')
	})

	beforeEach(() => {
		cy.login(randUser, 'password')
	})

	it('See test files in the list', () => {
		cy.get('#fileList tr[data-file="test.md"]', { timeout: 10000 })
			.should('contain', 'test.md')
		cy.get('#fileList tr[data-file="github.png"]', { timeout: 10000 })
			.should('contain', 'github.png')
	})

	it('Insert an image from files', () => {
		cy.openFile('test.md')
		clickOnImageAction(ACTION_INSERT_FROM_FILES, () => {
			const requestAlias = 'insertPathRequest'
			cy.intercept({ method: 'POST', url: '**/filepath' }).as(requestAlias)

			cy.log('Select the file in the filepicker')
			cy.get('#picker-filestable tr[data-entryname="github.png"]').click()
			cy.log('Click OK in the filepicker')
			cy.get('.oc-dialog > .oc-dialog-buttonrow button').click()

			waitForRequestAndCheckImage(requestAlias)
		})
	})

	it('Insert an image from a link', () => {
		cy.openFile('test.md')
		clickOnImageAction(ACTION_INSERT_FROM_LINK, (popoverId) => {
			const requestAlias = 'insertLinkRequest'
			cy.intercept({ method: 'POST', url: '**/link' }).as(requestAlias)

			cy.wait(2000)
			cy.log('Type and validate')
			cy.get('div#' + popoverId + ' li:nth-child(3) input[type=text]')
				.type('https://nextcloud.com/wp-content/themes/next/assets/img/headers/engineering-small.jpg')
				.wait(2000)
				.type('{enter}')
			// Clicking on the validation button is an alternative to typing {enter}
			// cy.get('div#' + popoverId + ' li:nth-child(3) form > label').click()

			waitForRequestAndCheckImage(requestAlias)
		})
	})

	it('Upload a local image', () => {
		cy.openFile('test.md')
		// in this case we almost could just attach the file to the input
		// BUT we still need to click on the action because otherwise the command
		// is not handled correctly when the upload has been done in <MenuBar>
		clickOnImageAction(ACTION_UPLOAD_LOCAL_FILE, () => {
			const requestAlias = 'uploadRequest'
			cy.intercept({ method: 'POST', url: '**/upload' }).as(requestAlias)

			cy.wait(2000)
			cy.log('Upload the file through the input')
			cy.get('.menubar input[type="file"]').attachFile('table.png')

			waitForRequestAndCheckImage(requestAlias)
		})
	})

	it('Delete the user', () => {
		cy.nextcloudDeleteUser(randUser, 'password')
	})

})
