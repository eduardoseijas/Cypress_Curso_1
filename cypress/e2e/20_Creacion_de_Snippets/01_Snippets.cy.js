///<reference types="cypress" />


describe("Configuracion y uso de los Snippets", ()=>{
let tiempo=1000
    it("Test - Snippets", function(){
      cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
      cy.wait(300)
      cy.title().should("eq","Input Validation")
      cy.wait(tiempo)

      cy.get('[for="firstname"]').should('be.visible').type('Demo_snippets')
      cy.wait(tiempo)

      




    })
})  //Cierre del describe