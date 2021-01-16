/// <reference types="cypress" />

it('Teste no Google', ( ) => {
 
  cy.visit( 'https://google.com.br/');
  cy.wait(1000)
  cy.get('.gLFyf').click().type('youtube')
  cy.get('.FPdoLc > center > .gNO89b').click()
})


it('Exercicio 1 - Abrir site e clicar botao signIn', ( ) => {
 
  cy.visit( 'http://zero.webappsecurity.com/');
  cy.wait(1000)
  cy.get('#signin_button').click()
})

it('Exercicio 2', ( ) => {
  cy.visit( 'http://zero.webappsecurity.com/');
  cy.wait(1000)
  cy.get('#signin_button').click()
  cy.get('h3').should('have.text','Log in to ZeroBank')
  cy.get('#user_login').type('testedeusers')
  cy.get('#user_password').type('testedeusers')
  cy.get('#user_remember_me').click()
  cy.get('.btn').click()

  cy.get('.offset3 > a').should('be.exist').and('be.visible')
})

it('Exercicio 3', ( ) => {
  cy.visit( 'http://zero.webappsecurity.com/');
  cy.wait(1000)
  cy.get('#feedback > div > strong').click()
  cy.get('h3').should('have.text','Log in to ZeroBank')
  cy.get('#user_login').type('testedeusers')
  cy.get('#user_password').type('testedeusers')
  cy.get('#user_remember_me').click()
  cy.get('.btn').click()
  cy.get('.offset3 > a').should('be.exist').and('be.visible')
})



