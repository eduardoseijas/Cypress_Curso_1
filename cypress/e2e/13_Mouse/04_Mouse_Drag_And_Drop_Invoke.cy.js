///<reference types="cypress" />


describe("Mouse_Drag_And_Drop_Invoke", ()=>{

    it("Test - Mouse_Drag_And_Drop_Invoke", function(){
        cy.visit("https://qarmy.ar/webs-practicas-testing/")
        cy.wait(300)
        cy.title().should("eq","Webs para practicar testing - QARMY")
        
        cy.contains("https://demo.opencart.com").trigger("mouseover")
        cy.wait(1000)
        
        //.invoke("removeAttr","target")
        //Es para remover el target="_blank" y que puedas abrir una ventana dentro del mismo cypress
        //y no otra ventana aparte
        cy.contains("https://demo.opencart.com").invoke("removeAttr","target").click({force:true})


    })
 
}) //Cierre del describe


