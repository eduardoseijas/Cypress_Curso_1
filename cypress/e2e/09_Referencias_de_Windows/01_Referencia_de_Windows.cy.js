///<reference types="cypress" />


describe("Referencia windows", ()=>{

    it("Test - Referencia windows", function(){
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.wait(300)
        cy.title().should("eq","The Number Game")

        cy.document().should("have.property","charset").and("eq","UTF-8")

        cy.url().should("include","random-number.html")




        

    })
 
}) //Cierre del describe


