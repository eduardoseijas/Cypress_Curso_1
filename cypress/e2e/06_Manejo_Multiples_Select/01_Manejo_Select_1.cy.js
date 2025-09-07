///<reference types="cypress" />


describe("Manejo Select", ()=>{

    it("Test - Select", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")
        cy.get("#comboBox1").select("Valor 3").should("have.value","3")
    
    })

        
}) //Cierre del describe