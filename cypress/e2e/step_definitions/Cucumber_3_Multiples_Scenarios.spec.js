import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given ('Abrir el navegador principal version 3', ()=>{
    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
    cy.title().should("eq","Formulario de Ejemplo")

})

When ("Cargamos el nombre Version 3 {word} {word}",(Nombre, Segundo_Nombre)=>{
    cy.get("#nombre").should("be.visible").type(`${Nombre} ${Segundo_Nombre}`)
})

When ("Cargamos el apellido Version 3 {word}",(Apellido)=>{
    cy.get("#apellidos").should("be.visible").type(Apellido)
})

When ("Cargamos el telefono Version 3 {word}",(Telefono)=>{
    cy.get("#tel").should("be.visible").clear().type(Telefono)
})

When ("Cargamos la Email Version 3 {word}",function(Email){
    cy.get("#email").should("be.visible").clear().type(Email)
})

When ("Cargamos la direccion Version 3 {word}",(Direccion)=>{
    cy.get("#direccion").should("be.visible").clear().type(Direccion)
})

Then ("Validamos que se pudo enviar los datos de la persona agregada Version 3",()=>{
    cy.xpath("//button[normalize-space()='Enviar']").click({force:true})
})