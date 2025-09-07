///<reference types="cypress" />


describe("Funciones_Each_Click", ()=>{
let tiempo=1000
    it("Test - Each Click", function(){
      cy.visit("https://demo.opentiendas.com/hombre-a10/")
      cy.wait(300)
      cy.title().should("eq","Ropa Hombre — Demo OpenTiendas")
      cy.wait(tiempo)
      cy.get('.card-product').each(($el,index,$list)=>{
      
        let pantalon=$el.text()
        
        if(pantalon.includes("Pantalones Pana Negro")){
          cy.wait(1000)
          cy.wrap($el).click()
          
        }
        
      })

    })

})  //Cierre del describe