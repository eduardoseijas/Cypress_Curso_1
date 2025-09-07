///<reference types='cypress' />
import ProyectoTres_PageObjectModel from "../../support/PageObjectModel/Proyecto3_PageObjectModel/ProyectoTres_PageObjectModel.cy";
//importo, mando a llamar mi libreria de ProyectoUno_PageObjectModel que esta en mi carpeta support

describe('Page Object Model', ()=>{
    
   const master_1= new ProyectoTres_PageObjectModel() 
   //creo una constante master para llamar ProyectoUno_PageObjectModel que esta en mi carpeta support

    //Esto es cuando truena el sistema
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

    master_1.Pagweb()
    

    it('Test uno - Prueba PageObjectModel Proyecto Uno', function(){
        master_1.Seccion_Inicio_Secion(" ","secret_sauce",1000)
        cy.Validar_Campo1("[data-test='error']","Epic sadface: Username and password do not match any user in this service",1000)
        //Este para validar es el que cree en commands
    })
});