///<reference types="cypress" />


describe("Manejo Select", ()=>{

    it("Test - Select_3_Then", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")
        cy.get("#comboBox1").select("Valor 3").should("have.value","3")

        //MUTIPLE-SELECT
        cy.get("#comboBox2").select(["Valor 2","Valor 3","Valor 4"]).then(()=>{
            cy.xpath("//button[normalize-space()='Enviar']").should("be.visible").click()
        })

        
       
    
    })

        
}) //Cierre del describe