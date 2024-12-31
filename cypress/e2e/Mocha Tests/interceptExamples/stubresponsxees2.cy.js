



context("Verify Add employee functionality", () => {



    it("Verify Add Employee error message for Mandotory fields", () => {

        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=10&offset=0&sortOrder=DESC&sortField=share.createdAtUtc",
            {
                statusCode: 400,
                body: {
                    "data": [
                        {
                            "id": 10,
                            "post": {
                                "id": 9
                            },
                            "type": "text",
                            "liked": true,
                            "text": "HI GURU \nHappy Birthday",
                            "employee": {
                                "empNumber": 7,
                                "lastName": "G",
                                "firstName": "Raju",
                                "middleName": "",
                                "employeeId": "muser",
                                "terminationId": null
                            },
                            "stats": {
                                "numOfLikes": 15,
                                "numOfComments": 0,
                                "numOfShares": 0
                            },
                            "createdDate": "2024-26-12",
                            "createdTime": "07:45",
                            "originalPost": null,
                            "permission": {
                                "canUpdate": true,
                                "canDelete": true
                            }
                        }
                    ],
                    "meta": {
                        "total": 4
                    },
                    "rels": []
                    
                }
    }).as("feeds")

    Cypress.on("uncaught:exception", function () {
  
        return false;
      });
       
        cy.login("Admin", "admin123")

        cy.get('a.oxd-main-menu-item.active').should("be.visible")
        cy.get('a[href="/web/index.php/buzz/viewBuzz"]').click()
        // verify where this API called 
        // verify subbed response
        cy.wait('@feeds')

       
    })


})