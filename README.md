**Environment Variables:-** 
Environment Variables are a key-value pair that sets at the system level and is accessible to all the applications in that context. All the automation tools provide features to access and set values for the environment variables. On the same lines, Cypress also provides features to access and manipulate environment variables.

**USAGE:-**
Its syntax looks like below:
{
  "env": {
    key: value
  }
}
** Access all the environment variables like

Cypress.env()

** Access specific environment variable with a name
Cypress.env(name)

**Example:-**
"env": {
    "navbarText":"cypress.io"
  }
}

In spec.js file, we test like this:-
const navbarText= Cypress.env("navbarText")
it('correctly renders the cypress website link', ()=>{
        cy.findByText(navbarText).should("exist")
})

**REACT TESTING LIBRARY : PLUGIN IN CYPRESS**
React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

