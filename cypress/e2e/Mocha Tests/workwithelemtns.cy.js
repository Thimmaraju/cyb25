describe('Working with elements', () => {
  it('Hidden element', () => {

    cy.visit('https://www.flipkart.com/')

    cy.get('a[href="/communication-preferences/push?t=all"]').click({ force: true })



  })


  it('click on multiple elements', () => {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    // cy.xpath("//button[text()='ADD TO CART']").eq(0).click()

    cy.xpath("//button[text()='ADD TO CART']").click({ multiple: true })



  })



  it('Key board keys press', () => {

    cy.visit('/web/index.php/auth/login')

    // cy.get('input[name="username"]').type("Admin").clear()

    // cy.wait(5000)

    cy.get('input[name="username"]').type("Admin", { delay: 3000 })

    cy.get('input[name="password"]').type("admin123{enter}")


  })


  it('check box', () => {

    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

    cy.get('input[name^="chk_altemail"]').check().should("be.checked")

    cy.wait(5000)
    cy.get('input[name^="chk_altemail"]').uncheck().should("not.be.checked")

  })


  it('check box - example 2', () => {


    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type("Admin")

    cy.get('input[name="password"]').type("admin123{enter}")

    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()

    // cy.get("input[type='checkbox']").check({force:true})

    // cy.wait(3000)
    // cy.get("input[type='checkbox']").uncheck({force:true})
    // cy.wait(3000)

    cy.get("input[type='checkbox']").check(["0", "2", "4"], { force: true })

    cy.wait(3000)

    cy.get("input[type='checkbox']").uncheck(["0", "2"], { force: true })
  })

  //Radio buttons 

  it('Radio button - example', () => {

    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

    cy.get('input[value="m"]').should("be.checked")

    cy.get('input[value="f"]').check()

    cy.get('input[value="m"]').should("not.be.checked")

    cy.get('input[value="f"]').should("be.checked")
  })


  it('Drop down - example', () => {

    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

    cy.get('select[name^="DOB_Month"]').select(10)
  })

  it.only('Tabs- example', () => {

    Cypress.on("uncaught:exception", () => {

      return false;
    }); // To ingnore the console errors 

    cy.visit('https://www.cypress.io/')

    cy.get('a[href="https://on.cypress.io/installing-cypress"]').eq(0).invoke("removeAttr", "target").click({ force: true })

    cy.url().should("eq", "https://docs.cypress.io/app/get-started/install-cypress")
  })



})