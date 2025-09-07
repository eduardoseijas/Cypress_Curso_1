///<reference types="cypress" />


describe("Assert Contains por inicio", ()=>{

    it("Test - Assert_Contains_por_Inicio", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")

        cy.get("#nombre").should("be.enabled").type("Eduardo")
        cy.get("#apellidos").should("be.visible").type("Seijas Pacheco")
        cy.get("#tel").should("be.visible").type("0123456789")
        cy.get("#email").should("be.enabled").type("EduardoSeijas@gmail.com")
        cy.get("#direccion").should("be.enabled").type("Demo_Contains_por_inicio")

        //CONTAINS EN INICIO
        cy.contains("[type='submit']","Enviar").should("have.class","btn btn-primary").click({force:true})

        

    })
 
}) //Cierre del describe