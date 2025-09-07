///<reference types="cypress" />


describe("Assert Class", ()=>{

    it("Test - Assert_Class", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")
                                            //VALIDACION POR CLASS
        cy.get("#nombre").should("be.visible").should("have.class","form-control")
        .then(()=>{
            cy.get("#nombre").type("Eduardo Seijas")
        })



        })
 
}) //Cierre del describe