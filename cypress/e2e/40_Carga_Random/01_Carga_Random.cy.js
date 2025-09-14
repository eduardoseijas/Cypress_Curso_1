///<reference types='cypress' />

describe('Carga Random', ()=>{
    let tiempo=2000
    let numero_pruebas=5
    it('Carga random de informacion', function(){
        for (let num=1;num<=numero_pruebas;num++){
            let estado_Arr = ["1:1","3:13","5:32"];
            let Random_estado= estado_Arr[Math.floor(Math.random)*estado_Arr.length];
            let cantidad=Math.floor(Math.random()*3000)
            let cantidad2=Math.floor(Math.random()*7867)

            cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
            cy.title().should("eq","Formulario de Ejemplo")
            cy.get("#nombre").should("be.visible").type("Name"+cantidad)
            cy.wait(tiempo)
            cy.get("#email").should("be.enabled").type("email"+cantidad2+"@gmail.com")
            cy.wait(tiempo)
        }


    })
})
