///<reference types="cypress" />


describe("Manejo de tablas - Children", ()=>{
let tiempo=1000
    it("Test - Manejo_de_tablas_Children", function(){
      cy.visit("https://tablepress.org/demo/")
      cy.wait(300)
      cy.title().should("eq","TablePress Demo · TablePress")
      cy.wait(tiempo)

      cy.get(".column-filter-widget").children(".widget-2")

      cy.get(".column-filter-widget").children(".widget-2").select("Spain")
    })

})  //Cierre del describe