import endpoints from "../fixtures/apiendpoints.json"
import addemployeebody from "../fixtures/addempapibody.json"

describe('API test Automation', () => {

    it.skip('Get request automation ', () => {

        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body).to.have.property("page", 2)
            expect(response.body).to.have.property("total", 12)

            cy.writeFile("cypress/fixtures/apiresponse.txt", response)
            expect(response.body.data[0].email).to.equal("michael.lawson@reqres.in")
            expect(response.body.data[1].first_name).to.equal("Raju")


        })

    })

    it('Get request automation - Orange HRM ', () => {

        cy.request({

            method: "GET",
            url: endpoints.getallemployees,
            headers: {
                cookie: Cypress.env('cookivalue'),
                referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
            }

        }).then((response) => {

            expect(response.status).to.equal(200)
            cy.writeFile("cypress/fixtures/orageget.txt", response)

            var firstemployeenum = response.body.data[0].empNumber

            cy.log(firstemployeenum)

            //expect(response.body.data[0].empNumber).to.equal("michael.lawson@reqres.in")

        })

    })

    it('POST request automation - Orange HRM ', () => {

     let r = (Math.random() + 1).toString(36).substring(7);

     addemployeebody.employeeId = r
     cy.log(r)
        cy.request({

            method: "POST",
            url: endpoints.addemployee,
            headers: {
                cookie: Cypress.env('cookivalue'),
                referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee",
            },
            body: addemployeebody
               

        }).then((response) => {

            expect(response.status).to.equal(200)

        })

    })
})