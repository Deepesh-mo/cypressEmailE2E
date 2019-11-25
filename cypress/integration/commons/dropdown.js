
// var chai = require('chai');
// var assert = chai.assert;    // Using Assert style
// var expect = chai.expect;    // Using Expect style
// var should = chai.should();  // Using Should style

describe('Cypress', () => {

    let choosenValue = null;
    let selectedItem = null;

    it('Open Normal DropDown', () => {
        cy.visit('http://localhost:6060/#!/Dropdown/1')
    })

    it('Placeholder text is present in dropdown', () => {
        cy.get('.mds-dropdown').contains('Select Option')
    })

    it('Dropdown is enabled and clickable', () => {
        cy.get('.mds-dropdown').click()
    })

    it('Dropdown list is visible', () => {
        cy.get('.mds-dropdown__popup__list__item')
            .its('length')      // calls 'length' property returning that value
            .should('be.gt', 0) // ensure the length is greater than 2
        cy.get('.mds-dropdown__popup__list__item').as('dropDownList')
        cy.get('@dropDownList').then((data) => {
            cy.log(data[0].innerText)
            choosenValue = data[0].innerText
            cy.log('choosenValue', choosenValue)
        })
    })

    it('Select first value', () => {
        cy.get('.mds-dropdown__popup__list__item').first().click()
    })

    it('Dropdown list closes after selection', () => {
        cy.get('.mds-dropdown__popup__list__item').should('not.exist')
        cy.get('.mds-dropdown__trigger__inner').as('selectedItem')
        cy.get('@selectedItem').then((data) => {
            selectedItem = data[0].innerText;
            cy.log('selectedItem', data[0].innerText)
        })
    })

    it('Selected value is correct', () => {
        cy.log(`selectedItem is ${selectedItem} and choosenValue is ${choosenValue} `)
        expect(choosenValue).to.equal(selectedItem)
    })


    it('Search input in dropdown is present', () => {
        cy.get('.mds-dropdown').click()
        cy.get('.mds-dropdown__popup__search input').should('exist')
    })

    it('Enter search term', () => {
        cy.get('.mds-dropdown__popup__search input').type('user')
    })

    it('Value should be filtered', () => {
        cy.get('.mds-dropdown__popup__list__item').each(($el, index, $list) => {
            cy.log($el[0].innerText)
            expect($el[0].innerText).to.contains('User')
        })
    })





    // it('goto general dropdown', () => {
    //     cy.visit('http://localhost:6060/#!/Dropdown/1')
    //     cy.get('.mds-dropdown').contains('Select Option')
    //     cy.get('.mds-dropdown').click()
    //     cy.get('.mds-dropdown__popup__list__item')
    //         .its('length')      // calls 'length' property returning that value
    //         .should('be.gt', 0) // ensure the length is greater than 2
    //     cy.get('.mds-dropdown__popup__list__item').first().click()
    //     cy.get('.mds-dropdown__trigger__inner').contains('INSTALL').should('exist')
    //     cy.get('.mds-dropdown__trigger__inner').should('contain', 'INSTALL')

    //     // cy.get('input').invoke('val').should('contain', 'mytext')
    //     // cy.get('input').invoke('attr', 'placeholder').should('contain', 'username')

    // })

    // it('goto multi dropdown', () => {
    //     cy.visit('http://localhost:6060/#!/Dropdown/5')
    //     cy.get('.mds-dropdown').contains('Select')
    //     cy.get('.mds-dropdown').click()
    //     var listLength = cy.get('.mds-dropdown__popup__list__item').its('length')
    //     listLength.should('be.eq', 15)
    // cy.get('.mds-dropdown__popup__list__item').each(($el, index, $list) => {
    //     $el.click()
    // })
    //     // click outside to close dropdown
    //     cy.get('body').click(-50, -50, { force: true })
    //     cy.get('.mds-dropdown__trigger__inner span').its('length').should('be.eq', 15)

    // })
});