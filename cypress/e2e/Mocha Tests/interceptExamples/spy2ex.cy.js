describe("Verify Add employee functionality", () => {


    it("Verify Add Employee error message for Mandotory fields", () => {

        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=10&offset=0&sortOrder=DESC&sortField=share.createdAtUtc").as("feeds")
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/anniversaries?limit=5").as("anniversaries")

        cy.login("Admin", "admin123")

        cy.get('a.oxd-main-menu-item.active').should("be.visible")
        cy.get('a[href="/web/index.php/buzz/viewBuzz"]').click()


        cy.wait('@feeds').then(({ response }) => {
            expect(response.statusCode).to.eq(200)


        })

        cy.wait('@anniversaries').then(({ response }) => {
            expect(response.statusCode).to.eq(200)


        })

    })

})