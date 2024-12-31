describe('Heroku login spec', () => {

    it.only('Login with valid creds', () => {

      //cy.viewport("macbook-11")
      cy.visit('https://the-internet.herokuapp.com/login')
      //cy.wait(20000)
      cy.get('input[name="username"]').type(Cypress.env("username"))
      cy.get('input[name="password"]').type(Cypress.env("password"))
      cy.get('button[type="submit"]').click()
      cy.get('div[class="flash success"]').should("be.visible")
      cy.contains('You logged into a secure area!').should("be.visible")
      cy.contains('Logout').should("be.visible")

    })

    it('Login with Invalid username', () => {

      cy.viewport("iphone-6", "landscape")
        cy.visit('https://the-internet.herokuapp.com/login')
  
        cy.get('input[name="username"]').type("ejghyr")
        cy.get('input[name="password"]').type("SuperSecretPassword!")
        cy.get('button[type="submit"]').click()
        cy.get('div[class="flash error"]').should("be.visible")

      })

      it('Login with Invalid password', () => {

        cy.viewport(390,844)
        cy.visit('https://the-internet.herokuapp.com/login')
  
        cy.get('input[name="username"]').type("tomsmith")
        cy.get('input[name="password"]').type("rlfj!")
        cy.get('button[type="submit"]').click()
        cy.get('div[class="flash error"]').should("be.visible")

      })

      it('Login with Invalid username and password', () => {

        cy.viewport(390,844)


        cy.visit('https://the-internet.herokuapp.com/login')
  
        cy.get('input[name="username"]').type("erjgb")
        cy.get('input[name="password"]').type("rlfj!")
        cy.get('button[type="submit"]').click()
        cy.get('div[class="flash error"]').should("be.visible")

      })


  })