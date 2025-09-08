///<reference types='cypress' />
import ProyectoDos_PageObjectModel from "../../support/PageObjectModel/Proyecto2_PageObjectModel/ProyectoDos_PageObjectModel.cy";
//importo, mando a llamar mi libreria de ProyectoUno_PageObjectModel que esta en mi carpeta support

describe('Page Object Model', ()=>{
    
   const master_1= new ProyectoDos_PageObjectModel() 
   //creo una constante master para llamar ProyectoUno_PageObjectModel que esta en mi carpeta support

    //Esto es cuando truena el sistema
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

    master_1.visit_pagweb()
    

    it('Test uno - Prueba PageObjectModel Proyecto Uno', function(){
        master_1.Seccion_Uno("EduardoSeijas18","123clave","Prueba_Page_Object_Model","Selection Item 3","Drop Down Item 2",1000)
    })
});