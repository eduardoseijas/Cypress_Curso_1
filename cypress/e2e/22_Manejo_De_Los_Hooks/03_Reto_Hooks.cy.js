///<reference types='cypress' />


describe('Reto - Hooks', ()=>{
    let tiempo=1000
    before(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.wait(tiempo)
        cy.get("#user-name").should("be.visible").type("standard_user")
        cy.get("#password").should("be.enabled").type("secret_sauce")
        cy.get('#login-button').should('be.visible').click()
        cy.wait(tiempo)
    })

    after(()=>{
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.xpath("//a[@class='shopping_cart_link']").click()
        cy.log("##### Ultimo Ciclo - Final de todo #####")
    })
    it('test - Uno', function(){
        cy.xpath("//img[@alt='Sauce Labs Backpack']").should('be.visible').click({force:true})
        cy.wait(tiempo)
    })

    it('test - Dos', function(){
        cy.get("#back-to-products").click({force:true})
        cy.wait(tiempo)
    })
    it('test - Tres', function(){
        cy.xpath("//img[@alt='Sauce Labs Bike Light']").click({force:true})
        cy.wait(tiempo)
    })
});