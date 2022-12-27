/// <reference types="cypress" />

describe('Board created trough API', ()=>{

var board= 'HTTP-BOARD'

beforeEach( () => {


    
    cy.request('DELETE', '/api/boards')
  
     cy.request('POST', '/api/boards',{
  
        name: board
 })
 })
  
  it('board created through http request + check board lenght ', () => {
  
    cy
      .visit('/')
        cy.get('.board_title')
         .should('contain.text', board)
  
  
      cy.get('.board')
      .should('have.length', '2')


      cy.url()
      .should('eq','http://localhost:3000/');
  })
 })