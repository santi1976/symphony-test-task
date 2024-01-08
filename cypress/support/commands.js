const baseUrl = Cypress.env("BASE_URL");

Cypress.Commands.add('login', (user, password) => {
      cy.visit(baseUrl);
      cy.get('[data-test="username"]').type(user);
      cy.get('[data-test="password"]').type(password);
      cy.get('[data-test="login-button"]').click(); 
}) 


