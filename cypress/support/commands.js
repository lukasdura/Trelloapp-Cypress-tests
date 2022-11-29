Cypress.Commands.add('addTask', ()=>{

    cy.visit('/')
    cy.get('.board_item')
     .click()

})
