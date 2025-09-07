///<reference types="cypress" />


describe("Mouse_Drap_And_Drop", ()=>{

    it("Test - Mouse_Drap_And_Drop", function(){
        cy.visit("https://testpages.eviltester.com/styled/drag-drop-javascript.html")
        cy.wait(300)
        cy.title().should("eq","GUI User Interactions")

        cy.get("#draggable1").drag("#droppable1",{force:true})
        cy.get("#draggable2").drag("#droppable2",{force:true})



    })
 
}) //Cierre del describe


