///<reference types="cypress" />


describe("Assert find - eq", ()=>{

    it("Test - Assert_fin_eq", function(){
        cy.visit("https://waves-company.com/product-category/")
        cy.wait(700)
        cy.title().should("eq","Product Category - Waves Company")

        cy.get(".container-inner").find(".woocommerce-loop-category__title").eq(3).click()

      

        })


    
        
}) //Cierre del describe