///<reference types='cypress' />

describe('Api Json', ()=>{

    it('Test - Api Json', function(){
        const datos={
            "Nombre": "Eduardo",
            "ApellidoP":"Seijas",
            "ApellidoM":"Pacheco",
            "Telefono":"1234567890",
            "Direccion":"Demo Json Api"
        }

        cy.log(datos["Nombre"])
        cy.log(datos["ApellidoP"])
        cy.log(datos["ApellidoM"])
        cy.log(datos["Telefono"])
        cy.log(datos["Direccion"])
     })
});

