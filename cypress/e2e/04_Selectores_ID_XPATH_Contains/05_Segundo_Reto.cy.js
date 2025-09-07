///<reference types="cypress" />


describe("Segundo Reto", ()=>{

    it("Test - 2do. Reto", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(700)
        cy.title().should("eq","HTML Form Elements")
        cy.wait(800)
        cy.xpath("//input[@name='username']").type("LuciaPiñaMartin",{force:true}).should('have.value','LuciaPiñaMartin')
        cy.xpath("//input[@name='password']").type("1234567890",{force:true}).should('have.value','1234567890')
        cy.xpath("//textarea[@name='comments']").clear().type("Prueba_de_cypress_reto_2").should("have.value","Prueba_de_cypress_reto_2")

        //HAREMOS LA PARTE FINal DEL FORMULARIO QUE ES COMBOX
        cy.xpath("//select[@name='dropdown']").should("be.visible").select("Drop Down Item 5").should("have.value","dd5")    
        
    })

        
}) //Cierre del describe