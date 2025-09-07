///<reference types='cypress' />


describe(' Comandos Personalizados - Custom ', ()=>{
    let tiempo=1000
before(()=>{
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)
    })
    it('Test - Demo Uno', function(){
        cy.Texto_Visible("#firstname","Eduardo Alejandro",1000)
        cy.Texto_Visible("#surname","Seijas Pacheco",1000)
        cy.Texto_Visible_Xpath("//input[@id='age']","35",1000)

        cy.Click_Xpath("//input[@type='submit']",200)
    })
});