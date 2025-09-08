///<reference types='cypress' />

//Cargare los archivos que estan dentro de la carpeta fixture
// el archivo datos_capeta_26_para_archivo_3_Reto

describe('Reto fixture varios archivos', ()=>{

    it('Test - Carga_Por_Fixture_Varios_Archivos', function(){
        cy.fixture("datos_capeta_26_para_archivo_3_Reto").then((tesdata) =>{
            tesdata.forEach((data) => {
                const d_nombre=data.Nombre
                const d_apellido=data.Apellido
                const d_tlf=data.Telefono
                const d_email=data.Email
                const d_direccion=data.Direccion
                let tiempo=1000
                cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html')
                cy.title().should('eq','Formulario de Ejemplo')
                cy.wait(tiempo)

                cy.get('#nombre').should('be.visible').clear().type(d_nombre)
                cy.get("#apellidos").should("be.enabled").clear().type(d_apellido)
                cy.get("#tel").should("be.visible").clear().type(d_tlf)
                cy.get("#email").should("be.visible").clear().type(d_email)
                cy.get("#direccion").should("be.visible").clear().type(d_direccion)
                cy.xpath("//button[normalize-space()='Enviar']").click({force:true})
            })
        })
        
    })
})
