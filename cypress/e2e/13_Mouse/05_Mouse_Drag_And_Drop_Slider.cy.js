///<reference types="cypress" />


describe("Mouse_Drag_And_Drop_Slider", ()=>{

    it("Test - Mouse_Drag_And_Drop_Slider", function(){
        cy.visit("https://demos.jquerymobile.com/1.4.5/slider/")
        cy.wait(300)
        cy.title().should("eq","Slider - jQuery Mobile Demos")

        cy.get('#slider-1').invoke("attr","value","66").trigger('change')

        cy.get("#slider-10").invoke("attr","value","6.5").trigger('change')

        cy.get('#slider-2').invoke("attr","value","77").trigger('change')

        cy.get('#slider-3').invoke("attr","value","18").trigger('change')
        
    


    })
 
}) //Cierre del describe


