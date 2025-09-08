///<reference types="cypress" />


describe("Funcioones_Invoke_3_Estilo", ()=>{
let tiempo=1000
    it("Test - Funcioones_Invoke_3_Estilo", function(){
      cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
      cy.wait(300)
      cy.title().should("eq","Input Validation")
      cy.wait(tiempo)

      cy.get('[for="firstname"]').invoke("attr","style","color:Blue; font-Size: 50px")





    

    })
})  //Cierre del describe