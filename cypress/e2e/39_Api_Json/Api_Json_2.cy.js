///<reference types='cypress' />

describe('Api Json 2', ()=>{

    it('Test - Api Json 2', function(){
        const datos={
            "Nombre": "Eduardo",
            "ApellidoP":"Seijas",
            "ApellidoM":"Pacheco",
            "Telefono":"1234567890",
            "Direccion":"Demo Json Api",
            "Cursos":[
                {
                    "Nombre":"Cypres",
                    "Descripcion": "Este es el curso de cypress"
                },
                {
                    "Nombre":"Selenium",
                    "Descripcion": "Este es el curso de Selenium"
                },
                {
                    "Nombre":"Playwright",
                    "Descripcion": "Este es el curso de Playwright"
                },
            ]
        }
        cy.log(datos.Nombre)
        cy.log(datos.ApellidoM)
        cy.log(datos.Cursos[0].Nombre)
        cy.log(datos.Cursos[1].Descripcion)
        cy.log(datos.Cursos[2].Nombre)

        
     })
});

