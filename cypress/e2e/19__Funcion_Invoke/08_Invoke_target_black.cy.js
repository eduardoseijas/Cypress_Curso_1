///<reference types="cypress" />


describe("Invoke Target Black", ()=>{
let tiempo=1000
    it("Test - Invoke_target_Black", function(){
      cy.visit("https://testpages.eviltester.com/styled/page?app=testpages&t=Others#for-testing")
      cy.wait(300)
      cy.title().should("eq","Test Pages - Others")
      cy.wait(tiempo)

      cy.xpath("/html/body/div/div[2]/p[10]/a").invoke('removeAttr',"target").click({force:true})




    })
})  //Cierre del describe