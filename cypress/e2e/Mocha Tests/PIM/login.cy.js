import data from "../../fixtures/login.json"
import login from "../../pages/login.po"

describe('Verify Login functionality', () => {

  // before("login", ()=>{
    
  //   cy.login(username, password)

  // })

  var username = "Admin"
  var password = "admin123"



  it('Verify the logo', () => {

    switch (Cypress.browser.name) {


      case "chrome": {

        cy.log("The browser is Chrome Browser ")
        cy.viewport("iphone-6")
      }
        break;

      case "firefox": {

        cy.log("The browser is Firefox Browser ")
        cy.viewport("macbook-15")
      }
        break;

      case "edge": {

        cy.log("The browser is Edge Browser ")
        cy.viewport("samsung-s10")
      }
        break;
    }

    cy.visit('/web/index.php/auth/login')

    cy.get(login.logo).should("be.visible")

  })

  it('Verify login with valid credentials ', () => {


    cy.login(username, password)

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  })

  it('Verify Login with Valid Username and Invalid password', () => {


    let wrongpassord = "ergjn"

    cy.visit("/web/index.php/auth/login")

    login.loginwithcreds(data.username, wrongpassord)

    cy.contains(login.loginErrorMessage()).should("be.visible")
  })
  it('Verify Login with InValid Username and valid password', () => {
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)

    login.loginwithcreds(data.wrongusername, data.password)

    cy.contains(login.loginErrorMessage()).should("be.visible")
  })

  it('Verify Login with InValid Username and Invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    login.loginwithcreds(data.wrongusername, data.wrongpassord)

    cy.contains(login.loginErrorMessage()).should("be.visible")
  })

})