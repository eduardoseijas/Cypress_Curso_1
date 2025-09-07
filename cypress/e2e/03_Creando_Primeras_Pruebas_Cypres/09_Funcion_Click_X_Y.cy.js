///<reference types="cypress" />

describe("Click x_y", ()=>{

    it("Test - Click x_y", function(){
        cy.visit("https://www.saucedemo.com/")
        cy.wait(700)
        cy.title().should("eq","Swag Labs")
        cy.wait(800)
        cy.get("#user-name").should("be.enabled").type("standard_user")
        cy.get("#password").should("be.visible").type("secret_sauce")
        cy.wait(800)
        cy.get("#login-button").click(50,0)
        cy.xpath("//img[@alt='Sauce Labs Backpack']").should("be.visible").click(10,0)
        cy.get("#back-to-products").should("be.visible").click(5,0)

        
        
    })

        
}) //Cierre del describe