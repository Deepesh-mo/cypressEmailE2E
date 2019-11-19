describe('Cypress', () => {

    beforeEach(() => {
        cy.login('emailLogin')
    })

    it('goto dashboard', () => {
        cy.visit('/v3/#/create')
    })
});