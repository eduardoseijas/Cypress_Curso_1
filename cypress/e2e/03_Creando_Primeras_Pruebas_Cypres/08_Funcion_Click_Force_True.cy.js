///<reference types="cypress" />

describe("Click ({force:true})", ()=>{

    it("Test - Click ({force:true})", function(){
        cy.visit("https://www.saucedemo.com/")
        cy.wait(700)
        cy.title().should("eq","Swag Labs")
        cy.wait(800)
        cy.get("#user-name").should("be.enabled").type("standard_user")
        cy.get("#password").should("be.visible").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get("#add-to-cart-sauce-labs-backpack").click({force:true})
        cy.xpath("//img[@alt='Sauce Labs Bike Light']").click({force:true})
        cy.get("#back-to-products").should("be.enabled").click({force:true})
        
        
    })

        
}) //Cierre del describe