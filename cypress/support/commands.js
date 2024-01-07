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
// -- This is a parent command --
// Cypress.Commands.add('login', (user, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const baseUrl = Cypress.env("CYPRESS_BASE_URL");

Cypress.Commands.add('login', (user, password) => {
    //cy.session([user, password], () => {
      cy.visit(baseUrl);
      cy.get('[data-test="username"]').type(user);
      cy.get('[data-test="password"]').type(password);
      cy.get('[data-test="login-button"]').click();
    //})
}) 


