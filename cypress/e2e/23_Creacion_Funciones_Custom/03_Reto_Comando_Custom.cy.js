///<reference types='cypress' />


describe(' Reto Comandos Personalizados - Custom ', ()=>{
    let tiempo=1000
before(()=>{
        cy.visit('https://testpages.eviltester.com/styled/basic-html-form-test.html')
        cy.title().should('eq','HTML Form Elements')
        cy.wait(tiempo)
    })
    //Esto es cuando truena el sistema
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

    it('Test - Reto Comando Personalizado', function(){
        cy.Reto_HTML_Form_Elements("EduardoSeijas18","123clave","Esto_Es_Un_Reto_Con_Comando","Selection Item 2","Drop Down Item 6",1000)
    })

});