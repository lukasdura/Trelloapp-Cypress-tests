/// <reference types="cypress" />

const board = 'FOLOW HTTP'
const list = 'HTTP LIST'
const task = 'HTTP TASK'


describe('Create task and follow  the request', ()=>{

beforeEach( () => {
   
    cy.request('DELETE','/api/boards')

    cy.intercept('POST', '/api/tasks')
     .as('createTask')


    cy.intercept('PATCH', '/api/tasks/*')
     .as('marktask')


})    

it('Create task and follow  the request',()=>{

 

  cy.visit('/')
   
   
  cy.get('.board_newItem')
   .click()
  
  cy.get('.board_addBoard')
   .click()
    .type(board)
     .type('{enter}') 
     

   

  cy.get('.CreateList_title')
   .click( )
     cy.get('.CreateList_input')
      .click()
       .type(list)
        .type('{enter}')
       
     
    cy.get('.List_addTask')
     .click()
    
    cy.get('[data-id="newTaskTitle"]')
     .click()
      .type(task)
        .type('{enter}')
     
    cy.wait('@createTask')
    .its('response.body.title')
     .should('eq', task)


    cy.get('[data-cy="task-done"]')
     .check({force: true})

    cy.wait('@marktask').then(marking=>{
     expect(marking.response.body.title).to.eq(task)
      expect(marking.response.body.completed).to.eq(true )
    
})
})
})

