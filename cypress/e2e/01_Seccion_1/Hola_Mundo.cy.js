///<reference types="cypress" />



describe("Bienvenido al Curso de Cypress", ()=>{

    it("Este es mi primer Test",function(){
        cy.log("Hola Mundo")
    })
    
    it("Este es el 2do test -> Campo Name", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
        cy.wait(2000)
        cy.title("Formulario de Ejemplo")

        cy.get("#nombre").type("Eduardo Alejandro")
        cy.xpath("//input[@id='apellidos']").type("Seijas Pacheco")
        cy.get("#tel").type("1234567890")
        cy.xpath("//input[@id='email']").should("be.visible").type("eduardo@gmail.com")
        cy.xpath("//input[@id='direccion']").should("be.enabled").type("Prueba1decypress")
        
        
        
        
        
        
        

    })
}) //El cierre de describe

//Importante, para crear aqui una carpeta debe ser .cy.js
//en este caso por ejemplo Hola_Mundo.cy.js