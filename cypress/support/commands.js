// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')
require('@4tw/cypress-drag-drop')

Cypress.Commands.add('login', (username, password) => { 
    

    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type(username)

    cy.get('input[name="password"]').type(password)

    cy.get('button[type="submit"]').click()


  })


  Cypress.Commands.add('addjobtitle', (title, jobdescription) => { 

    cy.contains('Job').click()
    cy.contains('Job Titles').click()

    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

    let randomChars = (Math.random() + 1).toString(36).substring(7);
   
    cy.get('input[class="oxd-input oxd-input--active"]').last().type(title)

    cy.get('textarea[placeholder="Type description here"]').type(jobdescription)

    cy.get('button[type="submit"]').click()

    cy.contains("Successfully Saved").should("be.visible")


  })

  Cypress.Commands.add("getRandomId", () => {
    let rand = Math.floor(Math.random() * 9000) + 1000;
    return rand;
  });