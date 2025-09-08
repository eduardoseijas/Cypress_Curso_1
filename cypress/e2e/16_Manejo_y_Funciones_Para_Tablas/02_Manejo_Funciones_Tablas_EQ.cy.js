///<reference types="cypress" />


describe("Manejo de tablas - EQ", ()=>{
let tiempo=1000
    it("Test - Manejo_de_tablas_EQ", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-pricing-table/#pricing-table-example-one")
      cy.wait(300)
      cy.title().should("eq","WordPress pricing table - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)

      cy.get(".vc_tta-tab").eq(2).should("have.text","Example 3").click()

    

      


      
    })

})  //Cierre del describe