///<reference types="cypress" />


describe("Reto - Manejo de tablas y Asserts", ()=>{
let tiempo=1000
    it("Test - Reto_Manejo_de_tablas", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-pricing-table/#pricing-table-example-one")
      cy.wait(300)
      cy.title().should("eq","WordPress pricing table - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)

      const Nombre_Botones = [
          "Example 1", 
          "Example 2", 
          "Example 3", 
          "Example 4", 
          "Example 5", 
          "Example 6", 
          "Example 7", 
          "Example 8", 
          "Example 9"];

      for(let x=0;x<Nombre_Botones.length;x++){
        cy.get(".vc_tta-tab").eq(x).should("contain.text",Nombre_Botones[x]).click({force:true})
      }
    })

})  //Cierre del describe