
var faker = require('faker');

describe('Cypress', () => {

    before(() => {
        cy.login('emailLogin')
    })

    it('goto general email step 1', () => {
        cy.visit('/v4/#/create/email-campaign')
        cy.get('.navigation-footer button', { timeout: 10000 }).click()
        cy.contains('Please specify a campaign name of more than 5 characters')
        cy.contains('Please check the errors on this step of campaign creation.')
        cy.get('#campaign-name-wrapper input').type(faker.company.companyName())
        cy.get('.radio.checkbox').first().click()
        cy.get('.navigation-footer button', { timeout: 10000 }).click()

    })

    it('goto general email step 2', () => {
        //2
        cy.get('#template-card button').first().click({ force: true })
        cy.get('#bee-plugin-container.visible', { timeout: 20000 }).as('bee')
        cy.get('.navigation-footer button').contains('Next').click()

        cy.contains('Email Subject is required.')
        cy.contains('Sender name is required.')
        cy.contains('Reply to email address is required')
        cy.get('#email-subject-wrapper .psz-container').type('Subject Email')
        cy.get('#email-sender-name-wrapper input').type('hello')
        cy.get('div#heading-dropdown.ui.fluid.dropdown.selection').first().click()
        cy.get('.scrolling.menu.transition > div:first-child()').first().click()
        cy.get('div#heading-dropdown.ui.fluid.dropdown.selection.MoeDrpEmpty.MoeAnalyticsError').click()
        cy.get('.dropdown-menu.visible .scrolling.menu.transition').first().click()
        cy.get('#replyEmailFlag').click({ force: true })
        cy.get('.navigation-footer button').contains('Next').click()
    })

    it('goto general email step 3', () => {
        //3       
        cy.get('[data-type="ASAP"]').click()
        cy.get('div#heading-dropdown.ui.fluid.dropdown.selection').first().click()
        cy.get('.dropdown-menu.visible .scrolling.menu.transition').first().click()
        cy.get('.navigation-footer button').contains('Create Campaign').click()
        cy.get('button span').contains('Create Campaign').click()
    })
});