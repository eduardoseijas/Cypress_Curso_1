import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Cucumber_1.feature archivo
Given ('Abrir el navegador principal Version 1', ()=>{
    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
    cy.title().should("eq","Formulario de Ejemplo")

})

When ("Cargamos el nombre Version 1",()=>{
    cy.get("#nombre").should("be.visible").type("Eduardo Alejandro")
})

When ("Cargamos el apellido Version 1",()=>{
    cy.get("#apellidos").should("be.visible").type("Seijas Pacheco")
})

When ("Cargamos el telefono Version 1",()=>{
    cy.get("#tel").should("be.visible").clear().type("1234567890")
})

When ("Cargamos la Email Version 1",function(){
    cy.get("#email").should("be.visible").clear().type("eduardoseijas@gmail.com")
})

When ("Cargamos la direccion Version 1",()=>{
    cy.get("#direccion").should("be.visible").clear().type("Prueba_Cucumber_01")
})

Then ("Validamos que se pudo enviar los datos de la persona agregada Version 1",()=>{
    cy.xpath("//button[normalize-space()='Enviar']").click({force:true})
})

