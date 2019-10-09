describe('Cypress', () => {

    beforeEach(() => {
        cy.login('emailLogin')
        cy.wait(2000)
    })

    it('goto general email', () => {
        cy.visit('/v4/#/create/email-campaign')
        // cy.get('.navigation-footer button').should('be.disabled')
        cy.get('.navigation-footer button', { timeout: 10000 }).click()
        cy.contains('Please specify a campaign name of more than 5 characters')
        cy.contains('Please check the errors on this step of campaign creation.')
        cy.get('#campaign-name-wrapper input').type('XYZXYZXYZXYZXYZXYZ')
        cy.get('.radio.checkbox').first().click()
        cy.get('.navigation-footer button', { timeout: 10000 }).click()

        // cy.get('.secondary.menu > .item.active').next().click()
        cy.get('#template-card button').first().click({ force: true })

        // cy.get('#bee-plugin-container.hidden').should('not.exist')
        cy.get('#bee-plugin-container.visible', { timeout: 10000 }).as('bee')
        
        cy.get('.navigation-footer button').contains('Next').click()
        //2
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
        //3       
        cy.get('[data-type="ASAP"]').click()
        cy.get('div#heading-dropdown.ui.fluid.dropdown.selection').first().click()
        cy.get('.dropdown-menu.visible .scrolling.menu.transition').first().click()
        cy.get('.navigation-footer button').contains('Create Campaign').click()
        cy.get('button span').contains('Create Campaign').click()
    })

    // it('step 2', () => {
    //     //2
    //     cy.contains('Email Subject is required.')
    //     cy.contains('Sender name is required.')
    //     cy.contains('Reply to email address is required')
    //     cy.get('#email-subject-wrapper .psz-container').type('Subject Email')
    //     cy.get('#email-sender-name-wrapper input').type('hello')
    //     cy.get('div#heading-dropdown.ui.fluid.dropdown.selection').first().click()
    //     cy.get('.scrolling.menu.transition > div:first-child()').first().click()
    //     cy.get('div#heading-dropdown.ui.fluid.dropdown.selection.MoeDrpEmpty.MoeAnalyticsError').click()
    //     cy.get('.dropdown-menu.visible .scrolling.menu.transition').first().click()
    //     cy.get('#replyEmailFlag').click({ force: true })
    //     cy.get('.navigation-footer button').contains('Next').click()
    // })

    // it('step 3', () => {
    //     //3       
    //     cy.get('[data-type="ASAP"]').click()
    //     cy.get('div#heading-dropdown.ui.fluid.dropdown.selection').first().click()
    //     cy.get('.dropdown-menu.visible .scrolling.menu.transition').first().click()
    //     cy.get('.navigation-footer button').contains('Create Campaign').click()
    //     cy.get('button span').contains('Create Campaign').click()
    // })
});