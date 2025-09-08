///<reference types="cypress" />


describe("Assert Length_Css", ()=>{

    it("Test - Assert_Length_Cs", function(){
        cy.visit("https://dc-js.github.io/dc.js/examples/table-pagination.html")
        cy.wait(700)
        cy.title().should("eq","dc.js - Table Pagination Example")
        cy.get("#test>thead>tr").should("have.length",1).should("have.css","font-size","14px")
        //para validar el css, saque el font-zise desde el f12, en styles, en inherited from body

    })
 
}) //Cierre del describe