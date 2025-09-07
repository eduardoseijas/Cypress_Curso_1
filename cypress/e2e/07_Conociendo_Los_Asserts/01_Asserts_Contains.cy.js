///<reference types="cypress" />


describe("Assert Contains", ()=>{

    it("Test - Assert_Contains", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")
        
        //CONTAINS    .contains()
        cy.get("#myForm").contains("ComboBox 1:")
        .then(()=>{
            cy.get("#comboBox1").select("Valor 5")
        })
    cy.log("###Verifica que en Myforms contiene Combox1###")
    cy.log("###Y una vez verifidicado esto###")
    cy.log("###Selecciona el valor 5###")
    })
    
        
}) //Cierre del describe