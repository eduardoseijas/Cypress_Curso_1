///<reference types="cypress" />


describe("Reto_Multi_Select", ()=>{

    it("Test - Reto_Multi_Select", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")
        cy.get("#comboBox1").select("Valor 2").should("have.value","2")
        cy.get("#comboBox2").select(["Valor 2","Valor 4"])
        //Haciendo una proema de si, me selecciona los valores que indico
        .then(()=>{
            //Me seleccione este:
            cy.get("#os").select("Windows").should("have.value","windows")
            //Y si selecciona ese:
            .then(()=>{
                //Me seleccione este:
                cy.get("#version").select("Windows 11").should("have.value","Windows 11")

            })    
        })
    cy.log("##########  Seleccion Con promesa ##################")
    })
    
        
}) //Cierre del describe