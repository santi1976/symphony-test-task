const baseURL = Cypress.env("CYPRESS_BASE_ENDPOINT");

describe("GET Public API's - Entries", () => {
    it("Status 200", () => {
        cy.request("GET", baseURL).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('entries');
        });
    });


    it('Entries with Authentication & Authorization', () => {
        cy.request(baseURL)  
        .its('body.entries').then((entries)=>{
            const authEntries = entries.filter((item) => {
                return item.Category === 'Authentication & Authorization';
                });
                cy.log(`${authEntries.length} Entries with Category "Authentication & Authorization": `);
                cy.log(JSON.stringify(authEntries, null, 2));
        })
    });
});
