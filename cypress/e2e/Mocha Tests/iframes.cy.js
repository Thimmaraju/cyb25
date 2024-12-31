describe('Automation - Working With Iframe', function () {

    it('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
      cy.visit('https://jqueryui.com/checkboxradio/');

      cy.get('label[for="radio-1"]').click()

     
    })

    it.only('Select Radio Button', () => {

        cy.visit("https://jqueryui.com/checkboxradio/")

        cy.get('iframe[class="demo-frame"]').then(($iframe) =>{

           let radio = $iframe.contents().find('#radio-1')

           cy.wrap(radio).check({force:true})
        })


       //    cy.contains("Download").click()


       //cypress-iframe - plugin

    
   })


  })

  //LKQ 
  



  


