import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Cucumber_1.feature archivo
/*Given ('Abrir el navegador principal', ()=>{
    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
    cy.title().should("eq","Formulario de Ejemplo")

})

When ("Cargamos el nombre",()=>{
    cy.get("#nombre").should("be.visible").type("Eduardo Alejandro")
})

When ("Cargamos el apellido",()=>{
    cy.get("#apellidos").should("be.visible").type("Seijas Pacheco")
})

When ("Cargamos el telefono",()=>{
    cy.get("#tel").should("be.visible").clear().type("1234567890")
})

When ("Cargamos la Email",function(){
    cy.get("#email").should("be.visible").clear().type("eduardoseijas@gmail.com")
})

When ("Cargamos la direccion",()=>{
    cy.get("#direccion").should("be.visible").clear().type("Prueba_Cucumber_01")
})

Then ("Validamos que se pudo enviar los datos de la persona agregada",()=>{
    cy.xpath("//button[normalize-space()='Enviar']").click({force:true})
})*/

//Cucumber_2.feature archivo
Given ('Abrir el navegador principal version 2', ()=>{
    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
    cy.title().should("eq","Formulario de Ejemplo")

})

When ("Cargamos el nombre Version 2 {word}",(Nombre)=>{
    cy.get("#nombre").should("be.visible").type(Nombre)
})

When ("Cargamos el apellido Version 2 {word}",(Apellido)=>{
    cy.get("#apellidos").should("be.visible").type(Apellido)
})

When ("Cargamos el telefono Version 2 {word}",(Telefono)=>{
    cy.get("#tel").should("be.visible").clear().type(Telefono)
})

When ("Cargamos la Email Version 2 {word}",function(Email){
    cy.get("#email").should("be.visible").clear().type(Email)
})

When ("Cargamos la direccion Version 2 {word}",(Direccion)=>{
    cy.get("#direccion").should("be.visible").clear().type(Direccion)
})

Then ("Validamos que se pudo enviar los datos de la persona agregada Version 2",()=>{
    cy.xpath("//button[normalize-space()='Enviar']").click({force:true})
})

