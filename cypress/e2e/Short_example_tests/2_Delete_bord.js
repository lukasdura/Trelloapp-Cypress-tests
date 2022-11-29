describe('Delete_board', ()=>{
    
const Create_board = 'new_board'
   
 it('', ()=>{
    
  cy.visit('/')
   
  cy.visit('/')
   cy.get('.board_newItem')
    .click()
      cy.get('.board_addBoard')
       .click()
       .type(Create_board)  
        .type('{enter}')


 cy.get('[data-cy="board-options"]')
  .click()
    cy.get('[data-cy="board-options"] > #myDropdown > .delete')
     .click({ force: true }) 


})
})