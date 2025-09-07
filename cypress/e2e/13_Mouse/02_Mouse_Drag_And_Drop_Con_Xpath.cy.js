///<reference types="cypress" />


describe("Mouse_Drag_And_Drop con XPath", () => {
  it("Arrastra usando solo Xpath", () => {
    cy.visit("https://testpages.eviltester.com/styled/drag-drop-javascript.html")
    cy.wait(300)

    const cuadroamarillo = "(//p[contains(text(),'Drag me')])[2]" 
    const cuadrorojo = "(//div[@id='droppable2'])[1]"  

    // Resuelves el destino con cy.xpath y lo pasas a .drag()
    cy.xpath(cuadrorojo).then($dest => {
      cy.xpath(cuadroamarillo).drag($dest[0], { force: true })
    })

    // Validación después del drop también con XPath
    cy.xpath(cuadrorojo).should("contain.text", "Dropped!")

    //OTRA FORMA DE HACERLO

    const cuadroamover = "(//div[@id='draggable1'])[1]"
    const destino = "(//div[@id='droppable1'])[1]";

    cy.xpath(destino).then($dest => {
    cy.xpath(cuadroamover).drag($dest[0], { force: true });  // ✅ pasar DOM element
    });



  })

})

