///<reference types="cypress" />


describe("Manejo de tablas - Elemento Padre", ()=>{
let tiempo=1000
    it("Test - Manejo_de_tablas_Elemento_Padre", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-pricing-table/#pricing-table-example-one")
      cy.wait(300)
      cy.title().should("eq","WordPress pricing table - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)

      cy.get('.vc_tta-tabs-list').parent().should("have.class","vc_tta-tabs-container")

      
    })

})  //Cierre del describe