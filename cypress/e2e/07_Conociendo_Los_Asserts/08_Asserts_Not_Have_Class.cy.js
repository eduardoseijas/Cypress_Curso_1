///<reference types="cypress" />


describe("Assert Not Have Class", ()=>{

    it("Test - Assert_Not_have_class", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")
                                            //VALIDACION CON not.have.class
        cy.get("#nombre").should("be.visible").and("not.have.class","form-control11")
        .then(()=>{                                //coloco la clase mal  la correcta es form-control
                                                  //La coloco mal porque estoy diciendo, no tiene esa clase
            cy.get("#nombre").type("Eduardo Seijas")
        })
    })
 
}) //Cierre del describe