/// <reference types="cypress" />


Cypress.Commands.add('addTask', (name) => {

    cy
      .contains('Add a card')
      .click()
  
    cy
      .get('[data-id="newTaskTitle"]')
      .type(name + '{enter}')
  
  })