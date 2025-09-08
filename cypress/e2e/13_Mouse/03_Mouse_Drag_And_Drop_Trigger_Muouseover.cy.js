///<reference types="cypress" />


describe("Mouse_Drag_And_Drop_Trigger_Mouseover", ()=>{

    it("Test - Mouse_Drag_And_Drop_Trigger_Muouseover", function(){
        cy.visit("https://www.way2automation.com/")
        cy.wait(300)
        cy.title().should("eq","Get Online Selenium Certification Course | Way2Automation")
        
        cy.contains("Video Tutorial").trigger("mouseover")
        cy.wait(1000)
        cy.contains("Selenium with Python").click({force:true})


    })
 
}) //Cierre del describe


