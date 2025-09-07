///<reference types='cypress' />


describe(' Reto Comandos Personalizados - Custom ', ()=>{
    let tiempo=1000
beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.wait(tiempo)
    })
    //Esto es cuando truena el sistema
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

    it('Test - Reto Comando Personalizado Validando Error Sin Usuario', function(){
        cy.Reto_Swap_Labs("  ","secret_sauce",1000)
        cy.Validar_Campo1("[data-test='error']","Epic sadface: Username and password do not match any user in this service",1000)
    })

   it('Test - Reto Comando Personalizado Validando Error Sin Usuario_Codigo_Corto', function(){
        cy.Reto_Swap_Labs("  ","secret_sauce",1000)
        cy.Validar_Campo1_1("[data-test='error']","Epic sadface: Username and password do not match any user in this service",1000)
    })

    it('Test - Reto Comando Personalizado Validando Error Sin Password', function(){
        cy.Reto_Swap_Labs("standard_user"," ",1000)
        cy.Validar_Campo2("[data-test='error']","Epic sadface: Username and password do not match any user in this service",1000)
    })

    it('Test - Reto Comando Personalizado Validando Error Sin Usuario y Sin Password', function(){
        cy.Reto_Swap_Labs(" "," ",1000)
        cy.Validar_Campo3("//div[@class='error-message-container error']","Epic sadface: Username and password do not match any user in this service",1000)
    })


});