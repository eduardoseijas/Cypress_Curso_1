///<reference types='cypress' />


describe('Navegacion entre las paginas', ()=>{
    it('reload', function(){
        let tiempo=1000
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)

        cy.xpath("//a[normalize-space()='Index']").should('be.visible').click()
        cy.wait(tiempo)
        cy.xpath("//a[@id='htmlformtest']").should('be.visible').click()
        cy.wait(tiempo)

        cy.go("back")//para regresar una pag
        cy.wait(tiempo)
        cy.go("back")//para adelantar una pag
        cy.wait(tiempo)
        cy.get('[name="firstname"]').should('be.visible').type('Eduardo Alejandro')
        cy.reload()
        cy.wait(1000)

    })
});