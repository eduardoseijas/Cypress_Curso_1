///<reference types='cypress' />

describe('Api Json Test', ()=>{
    let datos;
    it('Test - Api Json (Test - Reto - Consulta Post)', function(){
        for(let x=1;x<=10;x++)
        {   
            let tx=Math.random().toString(10)
            cy.request({
            method:"POST",
            url:"http://localhost:3000/posts",
            body:{
                "id":3+x,
                "title":tx,
                "Author":"Author"+tx
            },
            headers:{
                accept:"application/json"
            }
            }).then(response=>{
            expect(response.status).to.eq(201)
            })
        }
    })
});
