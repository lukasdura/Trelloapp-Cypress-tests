/// <reference types="cypress" />

describe('Prepare page for the next test case "DATA DRIVEN TESTING', ()=>{

var newboard = 'Prepare Data driven testing'
const lists = ['karol', 'peter', 'jano']
const task1 = ['1', '2', '3']
const task2 = ['1', '2']
const task3 = ['1']


beforeEach( () => {

cy.request('DELETE', '/api/boards')

})

it('Prepare page for the next test case "DATA DRIVEN TESTING"',()=>{
    
    cy.visit('/')
   
   
    cy.get('.board_newItem')
    .click()
    
    cy.get('.board_addBoard')
     .click()
      .type(newboard) 
       .type('{enter}')
    
    lists.forEach(list=>{
    
    cy.get('.CreateList_title')
     .click( )
    cy.get('.CreateList_input')
     .click()
      .type(list)
       .type('{enter}')
    
    })

    task1.forEach(task=>{

    cy.get('.List_addTask')
     .eq(0)
      .click()

    cy.get('[data-id="newTaskTitle"]')
     .eq(0)
      .type(task)
       .type('{enter}')

    })
    
    task2.forEach(task=>{

    cy.get('.List_addTask')
     .eq(1)
      .click()

    cy.get('[data-id="newTaskTitle"]')
     .eq(1)
      .type(task)
        .type('{enter}')

    })

    task3.forEach(task=>{

    cy.get('.List_addTask')
     .eq(2)
      .click()

    cy.get('[data-id="newTaskTitle"]')
     .eq(2)
      .type(task)
       .type('{enter}')
    })
    })
    })