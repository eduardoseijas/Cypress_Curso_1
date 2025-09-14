///<reference types='cypress' />

describe('Api Json Test', ()=>{
    let datos;
    it('Test - Api Json (Test - Consulta Get Metodo 2)', function(){
        cy.request({
            method:"GET",
            url:"http://localhost:3000/posts",
            headers:{
                accept:"application/json"
            }
        }).then(response=>{
            let bodyDatos;

            bodyDatos=JSON.parse(JSON.stringify(response.body))

            cy.log(bodyDatos)

            expect(bodyDatos[0]).has.property("title","Cypress")
            expect(bodyDatos[0]).has.property("author","Eduardo")
        })
        
     })


});
