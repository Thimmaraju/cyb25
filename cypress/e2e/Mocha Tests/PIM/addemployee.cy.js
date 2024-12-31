import login from "../../pages/login.po"

describe("Add Employee Test", () => {
    // Employee data
    const employeeList = [
      { firstname: "ala", lastname: "bella" },
    //   { firstname: "picky", lastname: "micky" },
    //   { firstname: "ela", lastname: "nela" },
    //   { firstname: "sunny", lastname: "muny" },
    //   { firstname: "shah", lastname: "ilk" },
    ];
  
    // Constants for commonly used selectors and URL
    const ADD_EMPLOYEE_URL = "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber";
    const LOGIN_CREDENTIALS = { username: "Admin", password: "admin123" };
    const SUCCESS_MESSAGE = "Successfully Saved";
  
    // Function to login
    const loginAsAdmin = () => {
      cy.login(LOGIN_CREDENTIALS.username, LOGIN_CREDENTIALS.password);
    };
  
    // Function to fill employee form
    const fillEmployeeForm = (firstname, lastname) => {
      cy.get("input[placeholder='First Name']").type(firstname);
      cy.get("input[placeholder='Last Name']").type(lastname);
      cy.getRandomId().then((randomId) => {
        cy.log(randomId);
        cy.get("div input[class='oxd-input oxd-input--active']")
          .last()
          .type(randomId);
      });
    };
  
    // Function to check employee details on the page
    const checkEmployeeDetails = (firstname, lastname) => {
      cy.contains(firstname).should("be.visible");
      cy.contains(lastname).should("be.visible");
    };
  
    // Loop through employee list and run tests
    employeeList.forEach((emp) => {
      it(`should add employee ${emp.firstname}`, () => {
        loginAsAdmin();
  
        cy.contains("PIM").click();
        cy.contains("Add Employee").click();
        fillEmployeeForm(emp.firstname, emp.lastname);
  
        cy.get("button[type='submit']").click();
        cy.contains(SUCCESS_MESSAGE).should("be.visible");
  
        cy.url().should("include", ADD_EMPLOYEE_URL);
        checkEmployeeDetails(emp.firstname, emp.lastname);
  
        // Navigate back to Add Employee page for next iteration
        cy.contains("Add Employee").click();
      });
    });
  });
  