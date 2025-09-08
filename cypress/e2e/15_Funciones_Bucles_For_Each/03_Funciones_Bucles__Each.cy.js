///<reference types="cypress" />


describe("Funciones_Each", ()=>{
let tiempo=3000
    it("Test - Each uno", function(){
      cy.visit("https://demo.opentiendas.com/hombre-a10/")
      cy.wait(300)
      cy.title().should("eq","Ropa Hombre — Demo OpenTiendas")

      cy.get('.card-product').each(($el,index,$list)=>{
        //cy.log(index)
        cy.log($el.text())
        //cy.log($list)
      })

    })

})  //Cierre del describe