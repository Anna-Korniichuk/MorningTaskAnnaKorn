/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

const nameofuser = 'LauraHaag1';
const passwordofuser = 'Pa$$word123';

describe('Morning task for registration, login, add product to the cart', () => {

  before(() => {
    cy.visit('/')
  });

  it('Successful Sign up', () => {
   const {username , password} = generateUser();

   cy.contains('a', 'Sign up')
    .click();

   cy.get('#signInModalLabel')
    .should('contain', 'Sign up')

   cy.wait(500).get('#sign-username') 
    .type(username)
    
   cy.get('#sign-password')
    .type(password)

   cy.contains('button', 'Sign up')
    .click()

   cy.on('window:alert', (str) => {
      expect(str).to.equal(`Sign up successful.`)
   })
  });

  it('Successful Login', () => {
   cy.visit('/')

   cy.contains('a', 'Log in')
    .click()

   cy.wait(500).get('#loginusername')
    .type(nameofuser)

   cy.get('#loginpassword')
    .type(passwordofuser)

   cy.contains('button', 'Log in')
    .click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Log in successful.`)
   })
  });
  it('Add product to the cart', () => {
    cy.login(nameofuser, passwordofuser)

    cy.contains('a', 'Samsung galaxy s6')
     .click()

    cy.contains('.btn', 'Add to cart')
     .click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added.`)
   })
  });
});