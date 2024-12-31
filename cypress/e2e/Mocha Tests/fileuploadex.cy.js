describe('Verify file upload', () => {


    it('Verify file uploading - selectFile', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').selectFile("D:/RajuCy/LearncypressB25/cypress/fixtures/10. CMMI Levels.jpeg")
        cy.get('#file-submit').click()

    })

    it.only('Verify file uploading - attachFile', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile("10. CMMI Levels.jpeg")
        cy.get('#file-submit').click()

    })

    it("downloadfile examaple", ()=>{


        cy.downloadFile("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/8a/ae/24/tbilisi.jpg?w=1200&h=-1&s=1", "cypress/downloads", "tbilisi.jpg")

        cy.readFile("cypress/downloads/tbilisi.jpg").should("exist")
    })

    it("downloadfile examaple", ()=>{


        cy.downloadFile("https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1721393199309", "cypress/downloads", "logo.png")

        cy.readFile("cypress/downloads/logo.png").should("exist")
    })


    it.only("downloadfile-plugin", ()=>{
        let randomChars = (Math.random() + 1).toString(36).substring(7);

        cy.downloadFile("https://t3.ftcdn.net/jpg/09/06/80/70/360_F_906807049_icMeWMzi0UuoFt5WgEuPsxncY5qD9gL7.jpg", "cypress/downloads", "raju"+randomChars+".jpg")
    })
})