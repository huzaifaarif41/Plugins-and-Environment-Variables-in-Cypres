/// <reference types="cypress" />
 
    context("Targetting Elements using Cypress",()=>{
    beforeEach(()=>{
        cy.visit('http://example.cypress.io/commands/actions')
    })
    it("should have an h1 tag",()=>{
        cy.get('h1').should("exist")
    })
    it("Renders the correct h1 text", ()=>{
        cy.get("h1").should('contain.text', 'Actions')
    })

    it("Renders a paragraph under h1 ", ()=>{
        cy.get('.container').eq(1).find('p').should('exist')
    })
    it("Renders a section with correct elements", ()=>{
        cy.get('.container').eq(2).within(()=>{
            cy.get("h4").should("exist")
            cy.get("p").should("exist")
        })
        it("should click a type link", ()=>{
            cy.get("#type").first().click()
        })
    })
})

   