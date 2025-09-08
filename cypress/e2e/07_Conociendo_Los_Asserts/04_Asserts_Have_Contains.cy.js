///<reference types="cypress" />


describe("Assert Have_Contains", ()=>{

    it("Test - Assert_Have_Contains", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(700)
        cy.title().should("eq","HTML Form Elements")
        cy.xpath("//input[@name='username']").should("be.enabled").type("EduardoSeijas")
        cy.xpath("//input[@name='password']").should("be.visible").type("clavenueva23")
        cy.xpath("//textarea[@name='comments']").clear().should("be.enabled").type("Esta_Es_Una_Prueba_Para_Asserts_Have_Contains")
        cy.xpath("//input[@value='submit']").click()
        cy.xpath("//li[@id='_valueusername']").should("have.text","EduardoSeijas")
        cy.xpath("//li[@id='_valuepassword']").should("have.text","clavenueva23")


        })
 
}) //Cierre del describe