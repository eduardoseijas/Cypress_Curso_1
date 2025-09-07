///<reference types="cypress" />


describe("Assert Retos_P1", ()=>{
    let time=1500

    it("Test - Assert_Reto-1", function(){
        cy.visit("https://testpages.eviltester.com/styled/calculator")
        cy.wait(700)
        cy.title().should("eq","Selenium Simplified Calculator")

        let a=5
        let b=5
        cy.get("#number1").should("be.enabled").type(a)
        cy.get("#number2").should("be.enabled").type(b)
        cy.get("#calculate").should("have.value","Calculate").should("have.class","styled-click-button").click({force:true})

        cy.get("#answer").should("be.visible").then((r)=>{
            let resultado=a+b
            cy.log("El valor de este resultado es: "+resultado)
            cy.log(r.text())
            let res2=r.text()

            if(resultado==res2){
                cy.log("Es el mismo resultado")
            }else{
                cy.log("El resultado es distinto")
            }

            if(res2>50){
                a=a-10  //si a vale 20, con esto dice que 20=20-10 y a va valer 10
                b=b-10
                cy.get("#number1").should("be.enabled").clear().type(a)
                cy.wait(time)
                cy.get("#number2").should("be.enabled").clear().type(b)
                cy.wait(time)
                cy.get("#calculate").should("have.value","Calculate").should("have.class","styled-click-button").click({force:true})
                cy.wait(time)
            }else{
                a=a+5  //si a vale 20, con esto dice que 20=20-10 y a va valer 10
                b=b+5
                cy.get("#number1").should("be.enabled").clear().type(a)
                cy.wait(time)
                cy.get("#number2").should("be.enabled").clear().type(b)
                cy.wait(time)
                cy.get("#calculate").should("have.value","Calculate").should("have.class","styled-click-button").click({force:true})
                cy.wait(time)

            }
        })

       

    })
 
}) //Cierre del describe