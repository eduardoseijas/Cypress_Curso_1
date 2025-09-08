///<reference types='cypress' />

describe('Cypress Record', ()=>{

    it('Test - Cypress Record', function(){
        let tiempo=1000
         cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html')
         cy.title().should('eq','Formulario de Ejemplo')
         cy.wait(tiempo)


     })
});



