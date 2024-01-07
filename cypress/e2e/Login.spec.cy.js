const baseUrl = Cypress.env("CYPRESS_BASE_URL");
const user = Cypress.env("CYPRESS_USER");
const password = Cypress.env("CYPRESS_PASSWORD");

describe('Login and Sort', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.login(user, password);
  });

  it('Verifies default and reverse sorting', () => {
    // Verify A-Z order by default
    cy.get('.inventory_item_name').then(($items) => {
      const itemTitles = $items.map((index, element) => Cypress.$(element).text()).get();
      expect(itemTitles).to.deep.equal(itemTitles.sort());
      cy.contains('A to Z').should('exist');
    });

    // Verify Z-A order
    cy.get('[data-test="product_sort_container"]').select('Name (Z to A)');
    cy.get('.inventory_item_name').then(($items) => {
      const itemTitles = $items.map((index, element) => Cypress.$(element).text()).get();
      expect(itemTitles).to.deep.equal(itemTitles.reverse());
    });
  });
});
