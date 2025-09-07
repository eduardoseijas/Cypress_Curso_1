///<reference types="cypress" />

describe("Primer Reto", ()=>{

    it("1er. Reto", function(){
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Datatables2_ok.html")
        cy.wait(700)
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(800)
        cy.get("#btnAdd").should("be.visible").click()
        cy.get("#nombre").should("be.visible").type("pedro")
        //{force:true} para forzar ya que no me queria escribir la edad
        cy.get("#edad").should("be.visible").type("30",{force:true})
        cy.get("#btnSubmit").click()
        cy.get("#btnAdd").should("be.visible").click()
        cy.get("#nombre").should("be.visible").type("jessica")
        cy.get("#edad").should("be.visible").type("21")
        cy.get("#btnSubmit").click()
        cy.get("#btnAdd").should("be.visible").click()
        cy.get("#nombre").should("be.visible").type("jesus")
        cy.get("#edad").should("be.visible").type("20",{force:true})
        cy.get("#btnSubmit").click()
        cy.get("#btnAdd").should("be.visible").click()
        cy.get("#nombre").should("be.visible").type("pablo")
        cy.get("#edad").should("be.visible").type("34",{force:true})
        cy.get("#btnSubmit").click()
        cy.xpath("//input[@type='search']").click().type("je")
        cy.wait(1000)
        cy.xpath("//input[@type='search']").click().clear()
        cy.wait(1000)

        //Editar un campo
        cy.xpath("//tbody/tr[4]/td[4]/button[1]").click()
        cy.get("#nombre").should("be.enabled").clear().type("Lucia")
        cy.get("#edad").should("be.enabled").clear({force:true}).type("37")
        cy.get("#btnSubmit").click()
        cy.wait(1000)
    })

        
}) //Cierre del describe