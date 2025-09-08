///<reference types='cypress' />


describe('Hooks', ()=>{

        before (()=>{
            cy.log("Esto inicia antes que todo, solo una vez, ### ES EL PRINCIPIO DE TODO ###")
        })

        beforeEach(()=>{
            cy.log("Esto se repite en cada uno de los test, muy importante")
        })

        afterEach(()=>{
            cy.log("Esto se hace al final de todos los test")
        }) 

        after(()=>{
            cy.log("##### Ultimo Ciclo - Final de todo #####")
        })

    it('Test Uno - Hooks', function(){
        cy.log("Test Hooks Uno")
    })
    it('Test Dos - Hooks', function(){
        cy.log("Test Hooks Dos")
    })
});