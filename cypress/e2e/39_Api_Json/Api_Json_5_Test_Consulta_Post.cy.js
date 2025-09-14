///<reference types='cypress' />

describe('Api Json Test', ()=>{
    let datos;
    it('Test - Api Json (Test - Consulta Post)', function(){
        cy.request({
            method:"POST",
            url:"http://localhost:3000/posts",
            body:{
                "id":"2",
                "title":"Insertando un valor (POST), desde cypress api",
                "Author":"Eduardo Seijas"
            },
            headers:{
                accept:"application/json"
            }
        }).then(response=>{
          expect(response.status).to.eq(201)
        })
        
        
  
     })


});
