///<reference types="cypress" />


describe("Alias", ()=>{
let tiempo=1000
    it("Test - Manejo de Alias", function(){
      cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
      cy.wait(300)
      cy.title().should("eq","Input Validation")
      cy.wait(tiempo)
      //CON LA FUNCION .as("") creas como una variable
      cy.get("#firstname").should("be.enabled").as("nom")
      //LLAMAS ESA FUNCION con @
      cy.get("@nom").type("Eduardo Alejandro")

//---------------------------------------------------------------------
//Apellido      
      cy.get("#surname").should("be.visible").as("ape")
      cy.get("@ape").type("Seijas Pacheco")
//---------------------------------------------------------------------
//Edad  
      cy.get("#age").should("be.visible").as("edad")
      cy.get("@edad").type("35")
//---------------------------------------------------------------------
//Country - Select 
      cy.get("#country").as("coun").should("contain","Venezuela")
      cy.get("@coun").select("Venezuela").should("have.value","Venezuela")
//---------------------------------------------------------------------
//Notas
      cy.get("#notes").should("be.visible").as("notas")
      cy.get("@notas").type("Esta_es_Probando_Los_Alias")

      cy.xpath("//input[@type='submit']").click({force:true})
    

    })
})  //Cierre del describe