///<reference types='cypress' />


describe('Hooks Ejemplos', ()=>{

    before (()=>{
        let tiempo=1000
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)
     })

     beforeEach(()=>{
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)
        })


    it('Test Uno - Hooks', function(){
        cy.get("#comboBox1").select("Valor 4").should("contain","Valor 4")
        cy.wait(2000)
    })
    it('Test Dos - Hooks', function(){
        cy.get('#comboBox2').select("Valor 3").should("contain","Valor 3")
        cy.wait(2000)
    })
});

