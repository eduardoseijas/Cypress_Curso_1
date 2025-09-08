///<reference types="cypress" />

describe("Asserts", ()=>{

    it("Test -Asserts", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(700)
        cy.title().should("eq","HTML Form Elements")
        cy.wait(800)
        cy.xpath("//input[@name='username']").should("be.enabled").type("EduardoSeijas")
        cy.xpath("//input[@name='password']").should("be.visible").type("clave123456")
        cy.xpath("//textarea[@name='comments']").should("be.visible").clear().type("Esta es una prueba nueva")
     
        
        
    })

        
}) //Cierre del describe