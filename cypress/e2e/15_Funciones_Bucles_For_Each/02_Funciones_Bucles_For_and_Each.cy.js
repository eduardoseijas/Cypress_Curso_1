///<reference types="cypress" />


describe("Funciones_Bucles_For_and_Each", ()=>{
let tiempo=3000
    it("Test - For uno", function(){
      for(let i=0;i<=100;i=i+10){
        cy.log("Numero: "+i)
      }

    })

    it("Test - For dos - Tabla del 5", function(){
      for(let i=1;i<=10;i++){
        let t=5
        cy.log(t+"*"+i+"=" + t*i)
      }
    })
})  //Cierre del describe