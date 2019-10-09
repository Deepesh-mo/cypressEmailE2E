describe('Cypress', () => {

    beforeEach(() => {
        cy.login('emailLogin')
        cy.wait(2000)
    })

    it('goto general email', () => {
        cy.visit('/v4/#/create/email-campaign')
        cy.get('.navigation-footer button').should('be.disabled')

        // cy.get('#campaign-name-wrapper input').type('XYZXYZXYZXYZXYZXYZ')
        // cy.get('.radio.checkbox').first().click()
        // cy.get('.navigation-footer button', { timeout: 10000 }).click()
        // cy.get('.secondary.menu > .item.active').next().click()
        // cy.get('#template-card button').first().click({ force: true })
        // cy.get('#bee-plugin-container.hidden').should('not.exist')
    })

    it('step 1 should show error', () => {
        cy.get('.navigation-footer button', { timeout: 10000 }).click()
        cy.contains('Please specify a campaign name of more than 5 characters')
        cy.contains('Please check the errors on this step of campaign creation.')
    })

    it('populate step 1', () => {
        cy.get('#campaign-name-wrapper input').type('XYZXYZXYZXYZXYZXYZ')
        cy.get('.radio.checkbox').first().click()
        cy.get('.navigation-footer button').click()
    })

    it('load step 2 email', () => {
        cy.get('.secondary.menu > .item.active').next().click()
        cy.get('#template-card button').first().click({ force: true })
        cy.get('#bee-plugin-container.hidden').should('not.exist')
    })

    it('Populate step 2 email', () => {
        cy.get('.navigation-footer button').contains('Next').click()
        cy.contains('Email Subject is required.')
        cy.contains('Sender name is required.')
        cy.contains('Reply to email address is required')
        cy.get('#email-subject-wrapper .psz-container').type('Subject Email')
        cy.get('#email-sender-name-wrapper input').type('hello')
        cy.get('#from-email-address-wrapper #heading-dropdown > .dropdown').click()
    })
});