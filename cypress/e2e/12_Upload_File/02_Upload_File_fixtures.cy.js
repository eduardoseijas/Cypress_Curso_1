///<reference types="cypress" />


describe("Upload File - Fixtures", ()=>{

    it("Test - Upload_File_fixtures", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(300)
        cy.title().should("eq","HTML Form Elements")

        //Carga de datos                            //Esta forma es otra manera de agregarle un timeout a un elemento, assert etc            
        cy.xpath("//input[@name='username']").should("be.visible",{timeout:9000}).type("EduardoSeijas")
        cy.xpath("//input[@name='password']").should("be.enabled").type("NuevaClave18")
        cy.xpath("//textarea[@name='comments']").clear().type("Esta_Es_Una_Prueba_Cargando_Un_Archivo_UploadFile")

        //Upload-File
        //Creo una constante para hacer la ruta

        const ruta2="Imagen_Lobo_fixture.jpg"
        // cambiamos el \ por /
        cy.xpath("(//input[@name='filename'])[1]").attachFile(ruta2, { force: true })

        cy.wait(2000)




        

    })
 
}) //Cierre del describe


