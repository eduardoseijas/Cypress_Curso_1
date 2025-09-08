///<reference types="cypress" />


describe("Funcioones_Invoke_2", ()=>{
let tiempo=1000
    it("Test - Funcioones_Invoke_2", function(){
      cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
      cy.wait(300)
      cy.title().should("eq","Input Validation")
      cy.wait(tiempo)

      cy.xpath("//label[normalize-space()='First name:']").invoke("text").as("tituloName")
      cy.get("@tituloName").should("contain","First name:")
      .then(()=>{
        cy.get("#firstname").should("be.enabled").type("Eduardo Alejandro")
      })



    

    })
})  //Cierre del describe