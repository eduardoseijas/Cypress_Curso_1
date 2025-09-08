///<reference types="cypress" />

describe("Tipos de Selectores", ()=>{

    it("Test - Selector ID", function(){
        cy.visit("https://www.saucedemo.com/")
        cy.wait(700)
        cy.title().should("eq","Swag Labs")
        cy.wait(800)
        cy.get("#user-name").should("be.enabled").type("visual_user")
        //por ID debes agregarle siempre #
        cy.get("#password").should("be.enabled").type("secret_sauce")
        cy.get("#login-button").click()



        
        
    })

        
}) //Cierre del describe