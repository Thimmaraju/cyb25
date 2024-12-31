import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

import dashboard from '../../pages/dashboardPage.po'
When("User clicks on PIM Menu", ()=>{

    cy.get(dashboard.pimMenu()).click()
}) 

When("User clicks on Add employee submenu", ()=>{

    cy.contains('Add Employee').click()
}) 

When("User Enter firstname {string}", (firstname)=>{

    cy.get('input[name="firstName"]').type(firstname)
}) 

When("User Enter lastname {string}", (lastname)=>{

    cy.get('input[name="lastName"]').type(lastname)
}) 

When("User clicks on Save button", ()=>{

    cy.get('button[type="submit"]').click()
}) 


Then("User should see success message", ()=>{

     cy.contains('Successfully Saved').should("be.visible")
    
}) 


Then("User should see error Message for firstname and lastname fields", ()=>{

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').first().should("be.visible")
    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').last().should("be.visible")
   
}) 