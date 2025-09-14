///<reference types='cypress' />

describe('Api Json Test', ()=>{
    let datos;
    it('Test - Api Json (Test - Consulta Get)', function(){
        datos=cy.request("http://localhost:3000/posts")

        datos.its("status").should("eq",200)
        
     })
    it('Test - Api Json (Test - Consulta Get 2 )', function(){
        datos=cy.request("http://localhost:3000/posts")

        .should((response)=>{
            expect(response.status).to.eq(200)
        })
        
     })

});
