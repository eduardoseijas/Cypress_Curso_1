///<reference types="cypress" />


describe("Funcioones_Invoke_4_OcultandoElElemento", ()=>{
let tiempo=1000
    it("Test - Funcioones_Invoke_4_OcultandoElElemento", function(){
      cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
      cy.wait(300)
      cy.title().should("eq","Input Validation")
      cy.wait(tiempo)
      //PROPIEDAD hide - .invoke('hide')
      cy.get('[for="firstname"]').invoke("hide")
      cy.wait(800)
      cy.get("#firstname").invoke("hide")

      





    

    })
})  //Cierre del describe