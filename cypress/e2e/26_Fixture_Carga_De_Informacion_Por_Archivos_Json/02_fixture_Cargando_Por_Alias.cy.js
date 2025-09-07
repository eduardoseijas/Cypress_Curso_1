///<reference types='cypress' />

//Cargare los archivos que estan dentro de la carpeta fixture
// el archivo datos_capeta_26_para_archivo_1


describe('Carga por Fixture por alias ', ()=>{
    let tiempo=1000
before(()=>{
    cy.fixture('datos_capeta_26_para_archivo_1').as("Cargando_Datos_Con_Alias") //Cargando datos con alias
    
    })
    it('Test - Carga_Por_Fixture_Por_Alias', function(){
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)
        cy.get("@Cargando_Datos_Con_Alias").then((datos)=>{ //se llama con el alias
            cy.get('#nombre').should('be.visible').type(datos.Nombre)
            cy.get("#apellidos").should("be.enabled").type(datos.Apellido)
            cy.get("#tel").should("be.visible").type(datos.Telefono)
            cy.get("#email").should("be.visible").type(datos.Email)
            cy.get("#direccion").should("be.visible").type(datos.Direccion)
            cy.xpath("//button[normalize-space()='Enviar']").click({force:true})
        })

    })

});