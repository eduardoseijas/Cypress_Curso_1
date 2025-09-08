///<reference types="cypress" />


//PARA USAR EL SELECTOR XPATH:
// HICE UNA INSTALACION CON EL COMANDO -> npm install -D cypress-xpath
//EN LA CARPETA SUPPORT DENTRO DE e2e.js coloque la libreria a importar -> require('cypress-xpath');
//CREE UNA CARPETA DENTRO DE SUPPORT e2e.d.ts, Y AHI COLOCO LAS LIBRERIAS
//EN EL CASO DE XPATH -> /// <reference types="cypress-xpath" />


describe("Tipos de Selectores", ()=>{

    it("Test - Selector Por Xpath", function(){
        cy.visit("https://www.saucedemo.com/")
        cy.wait(700)
        cy.title().should("eq","Swag Labs")
        cy.wait(800)
        cy.xpath("//input[@id='user-name']").should("be.enabled").type("visual_user")
        cy.xpath("//*[@id='password']").should("be.visible").type("secret_sauce")
        cy.xpath("//input[@id='login-button']").click()
        


        
        
    })

        
}) //Cierre del describe