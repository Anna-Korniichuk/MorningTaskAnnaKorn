// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const nameofuser = 'LauraHaag1';
const passwordofuser = 'Pa$$word123';

Cypress.Commands.add('login', (nameofuser, passwordofuser) => {
    cy.visit('/')

    cy.contains('a', 'Log in')
     .click()
 
    cy.wait(500).get('#loginusername')
     .type(nameofuser)
 
    cy.get('#loginpassword')
     .type(passwordofuser)
 
    cy.contains('button', 'Log in')
     .click()
  })