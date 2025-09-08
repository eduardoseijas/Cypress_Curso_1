///<reference types='cypress' />
import ProyectoUno_PageObjectModel from "../../support/PageObjectModel/Proyecto1_PageObjectModel/ProyectoUno_PageObjectModel.cy";
//importo, mando a llamar mi libreria de ProyectoUno_PageObjectModel que esta en mi carpeta support

describe('Page Object Model', ()=>{
    
   const master_1= new ProyectoUno_PageObjectModel() 
   //creo una constante master para llamar ProyectoUno_PageObjectModel que esta en mi carpeta support

    //Esto es cuando truena el sistema
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

    master_1.visit_pagweb()

    it('Test uno - Prueba PageObjectModel Proyecto Uno', function(){
        cy.log("Hola")
    })
});