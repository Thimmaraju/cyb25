describe('Alerts', () => {
    it('Handing alerts', () => {


      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

      cy.contains('Click for JS Alert').click()

      cy.on('window:alert', (alert)=>{


        expect(alert).to.equal("I am a JS Alert")
        return true 


      })


    })


    it.only('Handing alerts - confirm', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
        cy.contains('Click for JS Confirm').click()
  
        cy.on('window:confirm', (alert)=>{

          return true 
  
        })
  
  
      })

      it.only('Handing alerts - Pompt', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
        cy.window().then((prompt) =>{

            cy.stub(prompt, 'prompt').returns("Nagarjun")
            cy.contains("Click for JS Prompt").click()
        })
  
  
      })

      it.only('Handing alerts - Pompt - Cancel', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
        cy.window().then((x) =>{

            cy.stub(x, 'prompt').callsFake(()=> null)
            cy.contains("Click for JS Prompt").click()
        })
  
  
      })
  })