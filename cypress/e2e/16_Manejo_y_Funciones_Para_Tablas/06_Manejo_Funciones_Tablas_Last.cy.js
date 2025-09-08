///<reference types="cypress" />


describe("Manejo de tablas - Last", ()=>{
let tiempo=1000
    it("Test - Manejo_de_tablas_Last", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-pricing-table/#pricing-table-example-one")
      cy.wait(300)
      cy.title().should("eq","WordPress pricing table - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)

      cy.get('.vc_tta-tabs-list').last(".vc_tta-tab").contains("Example 4").should("have.text","Example 4").click({force:true})
      cy.wait(1500)
      cy.get('.vc_tta-tabs-list').last(".vc_tta-tab").contains("Example 8").should("have.text","Example 8").click({force:true})
      cy.wait(tiempo)

      
    })

})  //Cierre del describe