///<reference types="cypress" />


describe("Assert Validate_Contains - > Value", ()=>{

    it("Test - Assert_Validate_Contains", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(700)
        cy.title().should("eq","HTML Form Elements")

        cy.xpath("//input[@name='username']").should("be.enabled").type("EduardoSeijas")
        //Validando con value
        cy.xpath("//input[@name='username']").should("contain.value","EduardoSeijas")
        .then(()=>{
            cy.xpath("//input[@name='password']").should("be.visible").type("clavenueva23")
            //Validando con value
            cy.xpath("//input[@name='password']").should("contain.value","clavenueva23")
            .then(()=>{
                cy.xpath("//textarea[@name='comments']").clear().should("be.enabled").type("Esta_Es_Una_Prueba_Para_Asserts_Have_Contains")
                //Validando con value
                cy.xpath("//textarea[@name='comments']").should("have.value","Esta_Es_Una_Prueba_Para_Asserts_Have_Contains")
            })
        })
        cy.xpath("//input[@value='submit']").click()
        
        //VALIDANDO despues de hacer click
        cy.xpath("//li[@id='_valueusername']").should("have.text","EduardoSeijas")
        cy.xpath("//li[@id='_valuepassword']").should("have.text","clavenueva23")
        cy.xpath("//li[@id='_valuecomments']").should("have.text","Esta_Es_Una_Prueba_Para_Asserts_Have_Contains")
        })
 
}) //Cierre del describe