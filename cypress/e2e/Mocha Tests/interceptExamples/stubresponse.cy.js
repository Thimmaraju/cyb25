

context("Verify Add employee functionality", () => {



  it("Verify Add Employee error message for Mandotory fields", () => {

    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
      {
        statusCode: 200,
        body: {
          "data": [

            {
              "empNumber": 7,
              "lastName": "G",
              "firstName": "RAJU",
              "middleName": "",
              "employeeId": "6553",
              "terminationId": null,
              "jobTitle": {
                "id": 23,
                "title": "HR Manager",
                "isDeleted": true
              },
              "subunit": {
                "id": 13,
                "name": "Human Resources"
              },
              "empStatus": {
                "id": 3,
                "name": "Full-Time Permanent"
              },
              "supervisors": []
            }


          ],
          "meta": {
            "total": 30
          },
          "rels": []
        }
      }
    ).as("getEmployees")

    cy.login("Admin", "admin123")

    cy.get('a.oxd-main-menu-item.active').should("be.visible")
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    // verify where this API called 
    // verify subbed response
   cy.wait('@getEmployees')



    //cy.get("div.oxd-table-body > div > div > div:nth-child(5) > div").should('contain.text', 'HR Manager (Deleted)')


  })


})