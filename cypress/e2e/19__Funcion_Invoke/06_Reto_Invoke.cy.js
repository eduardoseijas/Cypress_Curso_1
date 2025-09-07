///<reference types="cypress" />


describe("Reto Invoke", ()=>{
let tiempo=1000
    it("Test - Reto_Invoke", function(){
      cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
      cy.wait(300)
      cy.title().should("eq","Input Validation")
      cy.wait(tiempo)

      //Last name - desaparece
      cy.get('[for="surname"]').invoke('hide')
      cy.wait(tiempo)
      cy.get('#surname').invoke('hide')
      cy.wait(tiempo)

      //Validar el titulo del campo nombre
      cy.get('[for="firstname"]').invoke('text').as('TitleName')
      cy.get('@TitleName').should('contain','First name:')
      //Si el titulo del nombre esta validado escribira en este un nombre
      .then(()=>{
      cy.get("#firstname").should("be.visible").type("Eduardo Alejandro")
      //Si escribe el nombre, y esto ocurre bien, se volvera a mostrar el Last name
      .then(()=>{
      cy.get('[for="surname"]').invoke('show')
      cy.wait(tiempo)
      cy.get('#surname').invoke('show')
      cy.wait(tiempo)
      //Al mostrar last name verificamos el titulo y si este es correcto, escribira el apellido
      cy.get("[for='surname']").invoke('text').as('TitleLast')
      cy.get('@TitleLast').should("contain","Last name:").then(()=>{
        cy.get("#surname").should("be.enabled").type("Seijas Pacheco")
      })
      })
      })
    })
})  //Cierre del describe