///<reference types="cypress" />


describe("Funciones_Invoke", ()=>{
let tiempo=1000
    it("Test - Funciones_Invoke", function(){
      cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
      cy.wait(300)
      cy.title().should("eq","Input Validation")
      cy.wait(tiempo)

      cy.get('.page-body > :nth-child(5)').invoke("text").as("info")

      cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")

    

    })
})  //Cierre del describe