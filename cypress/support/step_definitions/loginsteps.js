import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

import login from "../../pages/login.po"

Given("User Launch the Application", ()=>{


    cy.visit('/web/index.php/auth/login')
})

When('User Enter username {string} and password {string}', (username, password)=>{

   cy.get(login.usernameInput).type(username)
   cy.get(login.passwordInput()).type(password)
})

When("User clicks on login button", ()=>{

      cy.get(login.loginBtn()).click()
})

Then("User should be navigated to dashboard page", ()=>{

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    cy.contains('Dashboard').should("be.visible")
})

Then('User should get login error message', ()=>{

    cy.contains(login.loginErrorMessage()).should("be.visible")
})
