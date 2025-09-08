///<reference types="cypress" />


describe("Alerts", ()=>{
let tiempo=1000
    it("Test - Alerts", function(){
      cy.visit("https://testpages.eviltester.com/styled/alerts/fake-alert-test.html")
      cy.wait(300)
      cy.title().should("eq","Fake Alerts")
      cy.wait(tiempo)

      cy.get("#fakealert").click()
      cy.wait(tiempo)
      cy.get('#dialog-ok').click({force:true})

    })
})  //Cierre del describe