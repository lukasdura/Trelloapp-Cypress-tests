/// <reference types="cypress" />

describe('Create and check all tasks', ()=>{

const tasks= ['1','2','3','4','5']

beforeEach( () => {
   
cy.request('DELETE', '/api/boards')

  cy.visit('/')
  
  });
  
  it('Create and check all tasks', () => {
    

    cy.get('.board_newItem')
    .click()
     cy.get('.board_addBoard') 
      .click()
       .type('NEWBOARD{enter}')
        
    cy.get('.CreateList')
     .click()
       cy.get('.CreateList_input')
        .type('NEWLIST{enter}')  
   
    tasks.forEach(task=>{
    
    
    cy.get('.List_addTask')
     .click()
       cy.get('[data-cy="task-input"]')
       .click({force: true})
        .type(task)
         .type('{enter}')

 }) 
   
    cy.get('.checkmark')
     .eq(3)
      .check({force: true})
  
  
    cy.get('.Task label').then( task=>{
  
     expect(task[0]).to.not.have.class('completed')
      expect(task[1]).to.not.have.class('completed')
       expect(task[2]).to.have.class('completed')
        expect(task[3]).to.not.have.class('completed')
         expect(task[4]).to.not.have.class('completed')
   
  })
  })
  })