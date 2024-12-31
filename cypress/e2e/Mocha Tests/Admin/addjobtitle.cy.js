
import logindata from "../../fixtures/login.json"
import dashboard from "../../pages/dashboardPage.po"


describe("Verify add job title functionality", function () {

  const creds = ["Admin", "admin123"]
  const jobtiledata = {

       jobtitle : "SDET I", 
       jobdescription : "Automation testing"
  }

 const menuitems = {

    menu1 : "Admin",
    menu2 : "PIM", 
    menu3 : "Leave",
    menu4 : "Time",
    menu5 : "Recruitment",
    menu6 : "My Info",
    menu7 : "Performance",
    menu8 : "Dashboard"
 }
 
  const   jobtitles = ["SDET IV", "FronEnD Developer", "ScrumMaster", "BA", "PO"]

  jobtitles.forEach( jobtitle =>{

    if(Cypress.browser.name === 'chrome'){

      it(`Verify adding job title with mandatory fileds - ${jobtitle} `, function () {
  
          cy.login(creds[0], creds[1])
  
          // cy.conatins("Admin").should("be.visible")
          // cy.conatins("PIM").should("be.visible")
          for(let modulename in menuitems){
            cy.contains(menuitems[modulename]).should("be.visible")
  
          }
          cy.get(dashboard.pimMenu()).click()
  
          cy.addjobtitle(jobtitle, jobtiledata.jobdescription)
  
      })
    }
  

  })


})