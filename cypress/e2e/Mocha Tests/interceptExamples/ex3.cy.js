



context("Verify Add employee functionality", () => {



    it("Verify Add Employee error message for Mandotory fields", () => {

        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
            {
                statusCode: 400,

    }).as("getemployees")

    Cypress.on("uncaught:exception", function () {
  
        return false;
      });
       
        cy.login("Admin", "admin123")

        cy.get('a.oxd-main-menu-item.active').should("be.visible")
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
        // verify where this API called 
        // verify subbed response
        cy.wait('@getemployees')

       
    })


})