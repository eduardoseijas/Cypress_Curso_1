///<reference types="cypress" />


describe("Invoke src", ()=>{
let tiempo=1000
    it("Test - Invoke_src", function(){
      cy.visit("https://testsheepnz.github.io/random-number.html")
      cy.wait(300)
      cy.title().should("eq","The Number Game")
      cy.wait(tiempo)

      cy.xpath("//img[@src='img/dice.JPG']").invoke("attr","src").should("include","img/dice.JPG")




    })
})  //Cierre del describe