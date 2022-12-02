/// <reference types="cypress" />

const board = 'TEST_board'

describe('Created new list on new board trough Cypress.env', ()=>{     

beforeEach( () => {


    cy.request('DELETE', '/api/boards')
     cy.request('POST', '/api/boards',{
       name: board
  
  
     }).then(board=>{
      Cypress.env('board', board.body)
  
  
   })
  })
  
  it('Created new list on new board trough Cypress.env', () => {
  
    cy.request({
  
      method:'POST', 
       url:'/api/lists',
        body:{
         title:'TEST_list',
          boardId:Cypress.env('board')['id']
       }})
    
   cy.visit('/board/'+ Cypress.env('board')['id'])
  
  
})
})
 