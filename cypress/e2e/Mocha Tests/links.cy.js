
describe("links", ()=>{


    it("links", ()=>{

        cy.visit("https://trello.com/")
        cy.contains('Log in').click()

        cy.origin('https://id.atlassian.com', () => {

            cy.get('#username').type("rajutester2673@gmail.com")
            
          })
       

    })
}) 