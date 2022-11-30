/// <reference types="cypress" />

const lists = ['karol', 'peter', 'jano']



beforeEach( () => {

cy.request('DELETE', '/api/boards')

})

it('Prepare page for the next test case "DATA DRIVEN TESTING"',()=>{
    
    cy.visit('/')
   
   
    cy.get('.board_newItem')
    .click()newboard
    
    cy.get('.board_addBoard')
     .click()
      .type('Prepare Data driven testing{enter}')
    
    lists.forEach(list=>{
    
    cy.get('.CreateList_title')
     .click( )
    cy.get('.CreateList_input')
     .click()
      .type(list)
       .type('{enter}')
    
    })

    cy.get('.List_addTask')
     .eq(0)
      .click()

    cy.get('[data-id="newTaskTitle"]')
     .eq(0)
      .type('1{enter}')

    cy.get('.List_addTask')
     .eq(0)
      .click()

    cy.get('[data-id="newTaskTitle"]')
     .eq(0)
      .type('2{enter}')

    cy.get('.List_addTask')
     .eq(0)
      .click()
  
    cy.get('[data-id="newTaskTitle"]')
     .eq(0)
      .type('3{enter}')



    cy.get('.List_addTask')
     .eq(1)
      .click()

    cy.get('[data-id="newTaskTitle"]')
     .eq(1)
      .type('1{enter}')

    cy.get('.List_addTask')
     .eq(1)
      .click()

    cy.get('[data-id="newTaskTitle"]')
     .eq(1)
      .type('2{enter}')

    cy.get('.List_addTask')
     .eq(2)
      .click()

    cy.get('[data-id="newTaskTitle"]')
     .eq(2)
      .type('1{enter}')

    })