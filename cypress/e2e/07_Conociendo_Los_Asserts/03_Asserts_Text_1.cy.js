///<reference types="cypress" />


describe("Assert Text", ()=>{

    it("Test - Assert_Text", function(){
        cy.visit("https://waves-company.com/product-category/")
        cy.wait(700)
        cy.title().should("eq","Product Category - Waves Company")

        cy.get(".container-inner").find(".woocommerce-loop-category__title").eq(3).click()
        cy.get(".image-block").eq(0).click()
        cy.get(".product_title").then((e)=>{ //consegui product_title, con el mismo buscador de cyoress
            //cy.log((e.text()))
            let estado=e.text()
            //cy.log(estado)
            if(estado=="Camiseta Ferrol – Rosa"){
                cy.log("El titulo de es correcto -> "+estado)
            }
        })
        //VALIDAR PRECIO
        cy.get('.summary > .price > .woocommerce-Price-amount > bdi').then((p)=>{
            cy.log(p.text())
            //Hay que quitar el simbolo de divisa en este caso euro, con la siguiente funcion .slice()
            let precio=p.text()
            cy.log(precio) // aqui tiene el simbolo euro
            precio=precio.slice(0,5) //aqui se lo quite, estaba en la 5ta posicion
            cy.log(precio)
            if(precio>25){
                cy.log("No lo podemos comprar")
            }else{
                cy.log("Lo podemos comprar, selecciona la talla")
                cy.xpath("(//span[normalize-space()='S'])[1]").click()
                cy.get('.single_add_to_cart_button').click({force:true})
            }
        })

      

        })



    
        
}) //Cierre del describe