///<reference types="cypress" />


describe("Funcioones_Invoke_4_MostrandooElElemento", ()=>{
let tiempo=1000
    it("Test - Funcioones_Invoke_4_MostrandoElElemento", function(){
      cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
      cy.wait(300)
      cy.title().should("eq","Input Validation")
      cy.wait(tiempo)
      //PROPIEDAD hide - .invoke('hide')
      cy.get('[for="firstname"]').invoke("hide","2")
      cy.wait(3000)
      cy.get("#firstname").invoke("hide","2s")
      cy.wait(2000)
      //PROPIEDAD show - .invoke('show')
      cy.get('[for="firstname"]').invoke("show","4s")
      cy.wait(2000)
      cy.get("#firstname").invoke("show","4s")
      cy.wait(2000)





    

    })
})  //Cierre del describe