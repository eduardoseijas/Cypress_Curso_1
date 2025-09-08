///<reference types="cypress" />


describe("Reto_Funciones_Each_Seleccionando_Todos_Los_Elementos", ()=>{
let tiempo=1000
    it("Test - Reto_Each_Seleccionando_Todos_Los_Elementos", function(){
      cy.visit("https://demo.opentiendas.com/hombre-a10/")
      cy.wait(300)
      cy.title().should("eq","Ropa Hombre — Demo OpenTiendas")
      cy.wait(tiempo)
      const datos=[];

      cy.get('.card-product').each(($el,index,$list)=>{
        datos[index]=$el.text()
        cy.log(datos.length)
      }).then(()=>{
        for(let x=0;x<datos.length;x++){
          // x<= ya no se puede usar porque intenta llegar a 7, y este va de 0a6
          //por eso uso x<datos.length
          //RECORDANDO QUE EL 0 COMIENZA NO DESDE 1
        cy.get('.card-product').eq(x).click()
        cy.wait(tiempo)
        //cy.get("#select_attr_6").select("M").should("have.value","15")
        cy.wait(tiempo)
        cy.get('.breadcrumb > :nth-child(3) > a > span').click()
        cy.get('.breadcrumb > :nth-child(3) > a > span').click({force:true})
        }
      })
      
    })

})  //Cierre del describe