///<reference types="cypress" />


describe("Reto_Funciones_Each", ()=>{
let tiempo=1000
    it("Test - Reto_Each", function(){
      cy.visit("https://demo.opentiendas.com/hombre-a10/")
      cy.wait(300)
      cy.title().should("eq","Ropa Hombre — Demo OpenTiendas")
      cy.wait(tiempo)

      for(let x=0;x<=2;x++){
        cy.get(".card-product").eq(x).click()
        cy.wait(tiempo)
        cy.get("#select_attr_6").select("M").should("have.value","15")
        //cy.get("#select_attr_7").select("Negro").should("have.value","18")
        //esta es solo si coloco mi variable x<=1 que son solo las primeras 2 que tienen esa seleccion negro
        cy.wait(tiempo)
        cy.get('.breadcrumb > :nth-child(3) > a > span').click()
        cy.get('.breadcrumb > :nth-child(3) > a > span').click({force:true})
        
        
      }

      

    })

})  //Cierre del describe