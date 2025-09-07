

class ProyectoDos_PageObjectModel{

    visit_pagweb(){
    let tiempo=1000
    before(()=>{
        cy.visit('https://testpages.eviltester.com/styled/basic-html-form-test.html')
        cy.title().should('eq','HTML Form Elements')
        cy.wait(tiempo)
        })
    }
    Seccion_Uno(user,password,comentario,select,dropdownitem,t){
        let tiempo=t
        cy.xpath("//input[@name='username']").should('be.visible').type(user)
        cy.screenshot("Campo usuario")
        cy.xpath("//input[@name='password']").should('be.visible').type(password)
        cy.xpath("//textarea[@name='comments']").clear().type(comentario)
        const ruta2="Imagen_Lobo_fixture.jpg"
        cy.xpath("//input[@name='filename']").attachFile(ruta2, { force: true })
        cy.xpath("//input[@value='cb3']").uncheck()
        cy.xpath("//input[@value='cb2']").check()
        cy.xpath("//input[@value='rd3']").click({force:true})
        cy.xpath("(//select[@name='multipleselect[]'])[1]").select(select).should("contain",select)
        cy.xpath("(//select[@name='dropdown'])[1]").select(dropdownitem).should("contain", dropdownitem)
        cy.xpath("//input[@value='submit']").click({force:true})
        cy.wait(tiempo)

    }

}//Final 

export default ProyectoDos_PageObjectModel;