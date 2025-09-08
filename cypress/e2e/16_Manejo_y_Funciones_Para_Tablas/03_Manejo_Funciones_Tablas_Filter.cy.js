///<reference types="cypress" />


describe("Manejo de tablas - Filter", ()=>{
let tiempo=1000
    it("Test - Manejo_de_tablas_Filter", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-pricing-table/#pricing-table-example-one")
      cy.wait(300)
      cy.title().should("eq","WordPress pricing table - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)

      cy.get('.vc_tta-tab').filter((_, el) => el.innerText.includes('Example 5')).first().click();

      
    })

})  //Cierre del describe