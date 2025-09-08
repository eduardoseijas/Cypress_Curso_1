///<reference types="cypress" />


describe("Reto - Manejo de tablas y Asserts", ()=>{
let tiempo=1000
    it("Test - Reto_Manejo_de_tablas_ObtenerValores", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-table-merge-cells/")
      cy.wait(300)
      cy.title().should("eq","WordPress table merge cells - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)

      const datos=[];

      cy.get("#wpdtSimpleTable-173 tr").each(($el,index,$list)=>{
        datos[index]=$el.text()
      }).then(()=>{
          for(let i=0; i<datos.length;i++){
            cy.log(datos[i])
          }
      })
      

    })

    it("Test - Reto_Manejo_de_tablas_Suma", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-table-merge-cells/")
      cy.wait(300)
      cy.title().should("eq","WordPress table merge cells - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)

      const datos=[];
      let cantidadQuantity=0

      cy.get('#wpdtSimpleTable-173 tr').each(($el,index,$list)=>{
        datos[index]=$el.text()
      }).then(()=>{
          for(let i=0; i<datos.length;i++){
            cy.log(datos[i])
            if (Number(datos[i])){
              cantidadQuantity+=Number(datos[i])
            }
          }
          cy.log("La cantidad total es: "+ cantidadQuantity)
          expect(cantidadQuantity).eq(0)
      })
      
    })

    it.only("Test - Reto_Manejo_de_tablas_Suma_Valor_De_Un_Campo_En_Especifico", function(){
      cy.visit("https://wpdatatables.com/documentation/table-examples/wordpress-table-merge-cells/")
      cy.wait(300)
      cy.title().should("eq","WordPress table merge cells - wpDataTables - Tables and Charts WordPress Plugin")
      cy.wait(tiempo)
     
      const campo= cy.get('#wpdtSimpleTable-173 > tbody > :nth-child(6) > [data-cell-id="B6"]')
      //cy.log(campo)
      campo.each(($el,index,$list)=>{
        const dato=$el.text()
        cy.log(dato)

        if(dato.includes("OLED")){
          campo.eq(index).next().next().next().then((age)=>{
            const Edad=age.text()
            cy.log(Edad)
            cy.log("La Quantity de Monitor - Olded es: "+Edad)
            expect(Edad.trim().replace(/\u00a0/g, "")).to.eq("5")

            /*trim() quita espacios normales al inicio/fin.
            .replace(/\u00a0/g, "") elimina los &nbsp;.
            Así validas exactamente "5" sin modificar el resto de tu código.
            */

          })
        }


      })
      
    })
})  //Cierre del describe