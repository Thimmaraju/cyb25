class loginPage{

      logo = 'img[alt="company-branding"]'
      usernameInput = 'input[name="username"]'

      passwordInput(){

        return 'input[name="password"]'
      }

      entercred(value){

        return "input[name='"+value+"']";
      }
      loginBtn(){

        return 'button[type="submit"]'
      }

      loginErrorMessage(){

        return 'Invalid credentials'
      }


     loginwithcreds(username, password){

        cy.get(this.entercred("username")).type(username)

        cy.get(this.entercred('password')).type(password)
    
        cy.get(this.loginBtn()).click()
     }


}



const login = new loginPage()
export default login
