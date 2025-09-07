///<reference types="cypress" />


describe("Manejo de tablas - Next All", ()=>{
let tiempo=1000
    it("Test - Manejo_de_tablas_Next_All", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-pricing-table/#pricing-table-example-one")
      cy.wait(300)
      cy.title().should("eq","WordPress pricing table - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)

      cy.get('.vc_tta-tab').nextAll().should("have.length",8)
      cy.wait(1500)


      
    })

})  //Cierre del describe