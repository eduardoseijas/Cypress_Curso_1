///<reference types="cypress" />


describe("Manejo de tablas - Find", ()=>{
let tiempo=1000
    it("Test - Manejo_de_tablas_Find", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-pricing-table/#pricing-table-example-one")
      cy.wait(300)
      cy.title().should("eq","WordPress pricing table - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)

      cy.get('.vc_tta-tabs-list').find(".vc_tta-tab").contains("Example 4").should("have.text","Example 4").click({force:true})
      cy.wait(tiempo)
      cy.get('.vc_tta-tabs-list').find(".vc_tta-tab").contains("Example 9").should("have.text","Example 9").click({force:true})

      
    })

})  //Cierre del describe