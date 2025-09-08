///<reference types="cypress" />

describe("Funciones para type", ()=>{

    it("Test -Type Page-Up", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(2000)
        cy.title().should("eq","HTML Form Elements")
        cy.wait(3000)
        cy.xpath("//input[@name='username']").type("{pageup}")
        cy.wait(1000)

        

    })

    it("Test -Type Page-Down", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(2000)
        cy.title().should("eq","HTML Form Elements")
        cy.wait(3000)
        cy.xpath("//input[@name='username']").type("{pagedown}")
        cy.wait(1000)

        

    })
}) //Cierre del describe