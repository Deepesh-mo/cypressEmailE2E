// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a login command --
Cypress.Commands.add('login', (userType, options = {}) => {
    const loginTypes = {
        emailLogin: {
            body: {
                login_email: 'kanika@moengage.com',
                login_pass: 'moengage@123'
            },
            url: '/login?form.submitted=true&api=1',
            form: true
        }
    }

    const client = loginTypes[userType]

    cy.request({
        method: 'POST',
        url: client.url,
        form: client.form,
        body: client.body
    })
    // .then(() => {
    //     cy.getCookie('beaker.session.id')
    //         .then((cookie) => {
    //             cy.log('Login', JSON.stringify(cookie))
    //             cy.setCookie('beaker.session.id', cookie.value)
    //         })
    // })

    cy.fixture('timeZone.json').then((data) => {
        window.localStorage.setItem('timeZones', JSON.stringify(data));
    })

    cy.fixture('emailBuilder.json').then((data) => {
        window.localStorage.setItem('EMAIL_BUILDER_TEMPLATES', JSON.stringify(data));
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    cy.debug(err)
    cy.log(err);
    cy.log(runnable);
    return false
})

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
