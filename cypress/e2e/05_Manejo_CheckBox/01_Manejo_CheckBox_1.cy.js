///<reference types="cypress" />


describe("Manejo CheckBox", ()=>{

    it("Test - CheckBox_1", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(700)
        cy.title().should("eq","HTML Form Elements")
        cy.xpath("//input[@name='username']").type("LuciaPiñaMartin",{force:true}).should('have.value','LuciaPiñaMartin')
        cy.xpath("//input[@name='password']").type("1234567890",{force:true}).should('have.value','1234567890')
        cy.xpath("//textarea[@name='comments']").clear().type("Prueba_de_cypress_reto_2").should("have.value","Prueba_de_cypress_reto_2")

        //CHECKBOX
        //.check()otra forma de hacer click
        cy.xpath("//input[@value='cb3']").uncheck().should("not.be.checked")
        cy.wait(2000)
        cy.xpath("//input[@value='cb2']").check().should("be.checked")
        
        //RADIO ITEMS
        //.click()
        cy.xpath("//input[@value='rd3']").click().should("be.enabled")




        //HAREMOS LA PARTE FINal DEL FORMULARIO QUE ES COMBOX
        cy.xpath("//select[@name='dropdown']").should("be.visible").select("Drop Down Item 5").should("have.value","dd5")   
    })

        
}) //Cierre del describe