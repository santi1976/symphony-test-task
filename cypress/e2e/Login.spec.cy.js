const baseUrl = Cypress.env("CYPRESS_BASE_URL");
const user = Cypress.env("CYPRESS_USER");
const password = Cypress.env("CYPRESS_PASSWORD");

describe("Login and Sort", () => {
    beforeEach(()=>{
        cy.visit(baseUrl)
        cy.login(user, password);
    })

    it('Items in A-Z order by Default', () => {
        cy.contains('A to Z').should('exist')
        //Sorts in Alphabetical order  - validates A to Z
        cy.get('.inventory_item_name').then(($items) => {
            const itemTitles = $items.map((index, element) => Cypress.$(element).text()).get();
            expect(itemTitles).to.deep.equal(itemTitles.sort());
        });
    })

    it('Sorts Z - A ', () => {
        // Selects Z to A
        cy.get('[data-test="product_sort_container"]').select('Name (Z to A)');
        //Sorts in reverse  - validates Z to A
        cy.get('.inventory_item_name').then(($items) => {
            const itemTitles = $items.map((index, element) => Cypress.$(element).text()).get();
            expect(itemTitles).to.deep.equal(itemTitles.reverse());
        });
    })
}); 