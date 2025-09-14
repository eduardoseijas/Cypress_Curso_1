///<reference types='cypress' />

describe('Api Json Test', ()=>{
    let datos;
    it('Test - Api Json (Test- Consulta PUT)', function(){
        cy.request({
        method:"PUT",
        url:"http://localhost:3000/posts/13", //importante colocar el numero del ID que quieres modificar en la url con /
        body:{
            "title":"Modificando un valor desde cypress en la api",
            "Author":"Eduardo Seijas Pacheco"
        },

        }).then(response=>{
        expect(response.status).to.eq(200)
        })
        
    })
})
