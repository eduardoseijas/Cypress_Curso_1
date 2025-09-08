///<reference types='cypress' />


describe('Demo primer snippets', ()=>{
  it('Prueba -  Primer Snippets', function(){
    let tiempo=1000
    cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(tiempo)

    cy.get('#firstname').should('be.visible').type('Eduardo Alejandro')
  })
});