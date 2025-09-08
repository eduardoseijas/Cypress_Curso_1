///<reference types="cypress" />

describe("Funciones para type", ()=>{

    it("Test -Type Enter", function(){
        cy.visit("https://www.google.com/")
        cy.wait(2000)
        cy.title().should("eq","Google")
        cy.wait(1000)
        cy.get("#L2AGLb > .QS5gu").click()
        cy.get('[name="q"]').should("be.visible").type("Cypress io {enter}")
        

        

    })
}) //Cierre del describe