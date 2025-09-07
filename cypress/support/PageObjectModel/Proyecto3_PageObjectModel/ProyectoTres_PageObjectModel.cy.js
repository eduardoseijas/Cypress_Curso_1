

class ProyectoTres_PageObjectModel{

    Pagweb(){
    let tiempo=1000
    Cypress.config("defaultCommandTimeout",3000) //esto es configurarlo desde el proyecto en especifico la otra forma es para todos que es directamente en cypress.config.js
    before(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.wait(tiempo)
        })
    }
    Seccion_Inicio_Secion(user,password,t){
        let tiempo=t
        cy.get('#user-name').should('be.visible').type(user)
        cy.get("#password").should("be.enabled").type(password)
        cy.get("#login-button").click()
        cy.wait(tiempo)

    }

}//Final 

export default ProyectoTres_PageObjectModel;