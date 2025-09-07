

class ProyectoUno_PageObjectModel{

    visit_pagweb(){
    let tiempo=1000
    before(()=>{
        cy.visit('https://testpages.eviltester.com/styled/basic-html-form-test.html')
        cy.title().should('eq','HTML Form Elements')
        cy.wait(tiempo)
        })
    }
}//Final 

export default ProyectoUno_PageObjectModel;