///<reference types="cypress"/>


describe('Automation - Write file and Read file ', function () {

    it.only('Cypress Test Case - Write file example', function () {
       

        var stuname = "Sai"
        cy.writeFile('cypress/fixtures/module1/test.txt', stuname+"\n" )

        cy.writeFile('cypress/fixtures/module1/test.txt', "Raju",{flag: 'a+'} ) // Append 

        cy.writeFile('cypress/fixtures/module1/sample.json', {"firstname": "Raju", "lastname": "G"})
     
    })

    it('Cypress Test Case - extracting text and saving ina file ', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').then((txt)=>{

            var textvalue = txt.text()
            cy.writeFile('cypress/fixtures/module1/example.txt', textvalue);

            cy.readFile('cypress/fixtures/module1/test6.json').then((data) => {
                data.newKey = { 'extractedtext': textvalue }
                cy.writeFile('cypress/fixtures/module1/test6.json', JSON.stringify(data))
            })
            
        })
        
        
     
    })

    it.only('Cypress Test Case - Validation of Data both Text file and Json ', function () {

        cy.readFile("cypress/fixtures/10. CMMI Levels.jpeg").should('exist')
        
        cy.readFile("cypress/fixtures/admindata/jobtitle.json").its("jobtilte").should("eq", "Automation Engineer I")


        cy.readFile('cypress/fixtures/login.json').should('exist')
       

          cy.readFile('cypress/fixtures/module1/test.txt').should('contain','Sai');

          cy.readFile('cypress/fixtures/module1/test.txt').should('contain','Sai\nRaju')       
    })


    it('Cypress Test Case - Capture Text ', function () {
        
        cy.visit("/")
       // cy.xpath(login.Orangehrmlogo).should("be.visible")
        //actions
        cy.login(logindata.username, logindata.password)
    
        //Assertions
    
        cy.url().should("eq", logindata.dashboardurl)
    
        cy.url().should("include", logindata.partialdashurl)
    
        //or
        cy.contains(dashboard.dashboardpageheader()).should("be.visible")

        cy.contains("Buzz").click()
    
       cy.xpath("(//div[@class='orangehrm-buzz-post-body']/p)[3]").then((txt) =>{

             var textvalue = txt.text()

             cy.writeFile('cypress/fixtures/module1/test5.txt', textvalue)
             cy.writeFile('cypress/fixtures/module1/test5.json', { text: textvalue});    

       })
    })

    it.only("sample test", ()=>{

        cy.visit("/")

        cy.get('p[class="oxd-text oxd-text--p orangehrm-copyright"]').first().then((txt)=>{

             var version = txt.text()

            Cypress.env('version', version); // Assigning dynamic to envt variable 

             cy.log(Cypress.env("version"))
            // cy.writeFile('cypress/fixtures/module2/version.json', { "versionnumber": version});
     

        })
    })


    it.only("sample test 2", ()=>{

        cy.visit("/")

        cy.get('p[class="oxd-text oxd-text--p"]').first().then((txt)=>{


            var usertext = txt.text()

            cy.writeFile('cypress/fixtures/module1/creds.txt', usertext+"\n" )
        })

        
        cy.get('p[class="oxd-text oxd-text--p"]').last().then((txt)=>{


            var paswordtext = txt.text()

            cy.writeFile('cypress/fixtures/module1/creds.txt', paswordtext,{flag: 'a+'} )
        })
    })

  })