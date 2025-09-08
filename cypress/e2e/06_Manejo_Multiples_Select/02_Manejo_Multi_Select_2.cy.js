///<reference types="cypress" />


describe("Manejo Select", ()=>{

    it("Test - Select_2_Multiples", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")
        cy.get("#comboBox1").select("Valor 3").should("have.value","3")

        //MUTIPLE-SELECT
        cy.get("#comboBox2").select(["Valor 2","Valor 3","Valor 4"])
        //PARA SELECCIONAR VARIOS A LA VEZ, DENTRO DEL SELECT AGREGO []
        //Y DENTRO DE CADA UNO COLOCO EL VALOR QUE QUIERO ME SELECCIONE
        
       
    
    })

        
}) //Cierre del describe