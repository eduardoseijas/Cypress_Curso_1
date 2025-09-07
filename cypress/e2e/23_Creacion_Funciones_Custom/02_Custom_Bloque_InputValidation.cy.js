///<reference types='cypress' />


describe(' Comandos Personalizados - Custom ', ()=>{
    let tiempo=1000
before(()=>{
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)
    })
    it('Test - Bloque Creado', function(){
        cy.Bloque_InputValidation("Eduardo Alejandro","Seijas Pacheco","35","Venezuela","Esta_prueba_es_creando_un_comando_para_un_bloque",200)

    })
    it.only('Test - Bloque Creado 2', function(){
        cy.Bloque_InputValidation_Dos("Eduardo Alejandro","Seijas Pacheco","35","Venezuela","Esta_prueba_es_creando_un_comando_para_un_bloque",200)

    })
});