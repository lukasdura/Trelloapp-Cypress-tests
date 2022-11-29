/// <reference types="cypress" />

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
    .type('FOLOW HTTP{enter}')

   

  cy.get('.CreateList_title')
   .click( )
     cy.get('.CreateList_input')
      .click()
       .type('HTTP LIST{enter}')
     
    cy.get('.List_addTask')
     .click()
    
    cy.get('[data-id="newTaskTitle"]')
     .click()
      .type('HTTP{enter}')
     
    cy.wait('@createTask')
    .its('response.body.title')
     .should('eq', 'HTTP')


    cy.get('[data-cy="task-done"]')
     .check({force: true})

    cy.wait('@marktask').then(marking=>{
     expect(marking.response.body.title).to.eq('HTTP')
      expect(marking.response.body.completed).to.eq(true )
    
})





})

