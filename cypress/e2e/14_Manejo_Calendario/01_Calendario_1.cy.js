///<reference types="cypress" />


describe("Calendario", ()=>{

    it("Test - Calendario", function(){
        cy.visit("https://material.angularjs.org/latest/demo/datepicker")
        cy.wait(300)
        cy.title().should("eq","AngularJS Material - Demos > Datepicker")

        cy.get("body > main:nth-child(2) > md-content:nth-child(2) > div:nth-child(1) > docs-demo:nth-child(6) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > demo-include:nth-child(3) > div:nth-child(1) > md-content:nth-child(1) > div:nth-child(1) > div:nth-child(1) > md-datepicker:nth-child(2) > div:nth-child(2) > input:nth-child(1)").type("{pagedown}")
        cy.get("body > main:nth-child(2) > md-content:nth-child(2) > div:nth-child(1) > docs-demo:nth-child(6) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > demo-include:nth-child(3) > div:nth-child(1) > md-content:nth-child(1) > div:nth-child(1) > div:nth-child(1) > md-datepicker:nth-child(2) > div:nth-child(2) > input:nth-child(1)").should("be.visible").clear().type("10-26-2024")
        .then(()=>{
            cy.get('.datepickerdemoValidations > .demo-content > .layout-padding > :nth-child(1) > :nth-child(2) > .ng-pristine > .md-datepicker-input-container > .md-datepicker-input').should("be.visible").clear().type("12-14-2024").tab().tab()

        })

    })
 
}) //Cierre del describe


