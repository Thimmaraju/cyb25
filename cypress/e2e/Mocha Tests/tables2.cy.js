
describe("suitename", () => {


    it("test cae 1", () => {

        cy.visit('https://the-internet.herokuapp.com/tables')

        cy.get('table').should("have.length", 2) //- How many tables

        cy.get('#table1 >tbody >tr').should("have.length", 4) //- How many rows


        cy.get('#table1 >tbody >tr').its("length").should(('be.within', 5, 10))

        cy.get('#table1 >tbody >tr:nth-child(1) >td').should("have.length", 6) //- How many coloumns

        cy.get('#table1 >thead>tr:nth-child(1) >th').should("have.length", 6)

        //1 way
        cy.get('#table1 >tbody>tr:nth-child(2) >td:nth-child(3)').then((text) => {


            var textvalue = text.text()

            expect(textvalue).to.equal("fbach@yahoo.com")
        })

        cy.get('#table1>tbody>tr:nth-child(1)>td:nth-child(2)').then((text)=>{

            var textvalue = text.text()
           expect(textvalue).to.equal("John")
       })
       
       cy.get('#table1>tbody>tr:nth-child(4)>td:nth-child(1)').then((text)=>{
       
            var textvalue = text.text()
           expect(textvalue).to.equal("Conway")
       })
       
       cy.get('#table1>tbody>tr:nth-child(3)>td:nth-child(4)').then((text)=>{
       
            var textvalue = text.text()
           expect(textvalue).to.equal("$100.00")
       })

    //other way

    cy.get('#table1 >tbody>tr:nth-child(2) >td:nth-child(3)').should('have.text', 'fbach@yahoo.com')


     cy.get('#table1 >tbody>tr:nth-child(1)').within(()=>{
      
         cy.get("td").eq(0).should('have.text', 'Smith')
         cy.get("td").eq(1).should('have.text', 'John')
         cy.get("td").eq(2).should('have.text', 'jsmith@gmail.com')
         
     })


    cy.contains("Bach").parent().within(() => {

            //cy.get("td").eq(5).find('a[href="#delete"]').click()

            cy.get("td").eq(3).should("have.text", "$51.00")

     })

     //Print entire table data
        cy.get('#table1 > tbody >tr').each((rows) => {

            cy.wrap(rows).within((celldata) => {

                cy.log(celldata.text())

            })
        })



    })


})