///<reference types="cypress" />

describe("Tipos de Selectores", ()=>{

    it("Test - Selector Por Atributos", function(){
        cy.visit("https://www.saucedemo.com/")
        cy.wait(700)
        cy.title().should("eq","Swag Labs")
        cy.wait(800)
        cy.get("[placeholder='Username']").should("be.enabled").type("visual_user")
        // placeholder="Password" ese es el atributo lo colocamos entre []
        // y las comillas de ese atributo las cambiamos por comillas simples ''
        cy.get("[placeholder='Password']").should("be.visible").type("secret_sauce")
        cy.get("[data-test='login-button']").click()
        


        
        
    })

        
}) //Cierre del describe