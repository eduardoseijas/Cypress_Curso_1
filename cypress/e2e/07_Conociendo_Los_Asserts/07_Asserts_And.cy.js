///<reference types="cypress" />


describe("Assert And", ()=>{

    it("Test - Assert_And", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")
                                            //VALIDACION CON .and
        cy.get("#nombre").should("be.visible").and("have.class","form-control")
        .then(()=>{
            cy.get("#nombre").type("Eduardo Seijas")
        })
    })
 
}) //Cierre del describe