///<reference types="cypress" />

describe("Funciones para type", ()=>{

    it("Test -Type Tab", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(700)
        cy.title().should("eq","HTML Form Elements")
        cy.wait(800)
        cy.xpath("//input[@name='username']").type("EduardoSeijas").tab()
        cy.wait(800)
        cy.xpath("//input[@name='password']").type("Eduardo@gmail.com").tab()
        cy.xpath("//textarea[@name='comments']").clear()
        cy.xpath("//textarea[@name='comments']").should("be.visible").type("PruebaCypress")
        
        
    })

        
}) //Cierre del describe