///<reference types="cypress" />


describe("Upload File", ()=>{

    it("Test - Upload_File", function(){
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(300)
        cy.title().should("eq","HTML Form Elements")

        //Carga de datos
        cy.xpath("//input[@name='username']").should("be.visible").type("EduardoSeijas")
        cy.xpath("//input[@name='password']").should("be.enabled").type("NuevaClave18")
        cy.xpath("//textarea[@name='comments']").clear().type("Esta_Es_Una_Prueba_Cargando_Un_Archivo_UploadFile")

        //Upload-File
        //Creo una constante para hacer la ruta

        const ruta="cypress/e2e/12_Upload_File/Imagen/Imagen_Lobo.jpg"
        // cambiamos el \ por /
        cy.xpath("(//input[@name='filename'])[1]").selectFile(ruta, { force: true })
        //Al usuar una imagen desde la carpeta que yo cree en la doce, uso el selectfile y coloco la ruta completa
        //Si solo la subo en cypress>fixtures, no necesito colocar la ruta completa de la imagen
        //La constante puede ser solo const ruta=Imagen_Lobo.jpg
        //Y la funcion seria .attachFile(ruta) incluso puedo ponerle si quiero .attachFile(ruta, {force:true})
        cy.wait(2000)




        

    })
 
}) //Cierre del describe


