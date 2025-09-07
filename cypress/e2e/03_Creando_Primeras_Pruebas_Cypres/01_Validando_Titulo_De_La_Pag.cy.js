///<reference types="cypress" />

describe("Validando titulo", ()=>{

    it("Test, validando el titulo de la pag", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
        cy.wait(2000)
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(1000)

        

    })
}) //Cierre del describe