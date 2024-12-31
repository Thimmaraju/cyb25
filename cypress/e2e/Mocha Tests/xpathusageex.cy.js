describe('Verify Login functionality', () => {


    it('Verify Login valid creds', () => {

    cy.visit("/")

    cy.xpath('//input[@name="username"]').type("Admin")

    })

})