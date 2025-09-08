///<reference types="cypress" />


describe("Tipos de Selectores", ()=>{

    it("Test - Selector Por Contains", function(){
        cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/")
        cy.wait(700)
        cy.title().should("eq","Radio buttons - jQuery Mobile Demos")
        cy.wait(800)
        cy.get(".ui-radio").contains("Two").click({force:true})
        cy.wait(800)
        cy.get(".ui-radio").contains("Three").click({force:true})

        
       
        


        
        
    })

        
}) //Cierre del describe