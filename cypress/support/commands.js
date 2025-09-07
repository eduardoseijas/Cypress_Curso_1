// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//CREANDO COMANDOS PERSONALIZADOS
Cypress.Commands.add('Texto_Visible', (selector,texto,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Texto_Visible_Xpath', (selector,texto,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Click', (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_Xpath', (selector,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').click()
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_Force', (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_Force_Xpath', (selector,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Clear', (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').clear()
    cy.wait(tiempo)
})

Cypress.Commands.add('Clear_Xpath', (selector,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').clear()
    cy.wait(tiempo)
})

Cypress.Commands.add('Validar_Campo1', (selector,men,t) => { 
cy.get(selector).should("be.visible").then((val)=>{
            let dato=val.text()
            let mensaje=men
            cy.log(dato)
            expect(dato).to.eq(mensaje)
            if(dato==mensaje){
                cy.log("##########")
                cy.log("No has escrito el usuario")
                cy.log("##########")
            }
        })
})

Cypress.Commands.add('Validar_Campo1_1', (selector,men,t) => { 
cy.get(selector).should("be.visible").should("contain",men).then((val)=>{
        cy.log("##########")
        cy.log("No has escrito el usuario")
        cy.log("##########")
        })
})


Cypress.Commands.add('Validar_Campo2', (selector,men,t) => { 
cy.get(selector).should("be.visible").then((val)=>{
            let dato=val.text()
            let mensaje=men
            cy.log(dato)
            expect(dato).to.eq(mensaje)
            if(dato==mensaje){
                cy.log("##########")
                cy.log("No has escrito el password")
                cy.log("##########")
            }
        })
})

Cypress.Commands.add('Validar_Campo3', (selector,men,t) => { 
cy.xpath(selector).should("be.visible").then((val)=>{
            let dato=val.text()
            let mensaje=men
            cy.log(dato)
            expect(dato).to.eq(mensaje)
            if(dato==mensaje){
                cy.log("##########")
                cy.log("No has escrito el usuario ni el password")
                cy.log("##########")
            }
        })
})

//##### FUNCIONES POR CONJUNTO O COMPLETA #####

//Creando funcion Input Validation
Cypress.Commands.add('Bloque_InputValidation', (name,lastname,age,country,note,t) => {
    let tiempo=t
    cy.get('#firstname').should('be.visible').type(name)
    cy.get("#surname").should("be.enabled").type(lastname)
    cy.get("#age").should("be.visible").type(age)
    cy.get("#country").select(country).should("contain",country)
    cy.get("#notes").should("be.visible").type(note)
    cy.xpath("//input[@type='submit']").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Bloque_InputValidation_Dos', (name,lastname,age,country,note,t) => {
    let tiempo=t
    cy.Texto_Visible("#firstname",name,2000)
    cy.Texto_Visible("#surname",lastname,2000)
    cy.Texto_Visible_Xpath("//input[@id='age']",age,2000)
    cy.get("#country").select(country).should("contain",country)
    cy.Texto_Visible_Xpath("//textarea[@id='notes']",note,200)
    cy.Click_Xpath("//input[@type='submit']",2000)
    cy.wait(tiempo)
})

Cypress.Commands.add('Reto_HTML_Form_Elements', (user,password,comentario,select,dropdownitem,t) => {
    let tiempo=t
    cy.xpath("//input[@name='username']").should('be.visible').type(user)
    cy.xpath("//input[@name='password']").should('be.visible').type(password)
    cy.xpath("//textarea[@name='comments']").clear().type(comentario)
    const ruta2="Imagen_Lobo_fixture.jpg"
    cy.xpath("//input[@name='filename']").attachFile(ruta2, { force: true })
    cy.xpath("//input[@value='cb3']").uncheck()
    cy.xpath("//input[@value='cb2']").check()
    cy.xpath("//input[@value='rd3']").click({force:true})
    cy.xpath("(//select[@name='multipleselect[]'])[1]").select(select).should("contain",select)
    cy.xpath("(//select[@name='dropdown'])[1]").select(dropdownitem).should("contain", dropdownitem)
    cy.xpath("//input[@value='submit']").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Reto_Swap_Labs', (user,password,t) => {
    let tiempo=t
    cy.get("#user-name").should("be.visible").type(user)
    cy.get("#password").should("be.enabled").type(password)
    cy.xpath("//input[@id='login-button']").click()
    cy.wait(tiempo)
 
})