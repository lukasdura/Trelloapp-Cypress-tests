describe('Create board and list and check', ()=>{
 
const Create_board = 'new_board'
const Create_list = 'new_list'          



it('', ()=>{

cy.visit('/')


cy.get('.board_newItem')
 .click()

cy.get('.board_addBoard')
 .click()
  .type(Create_board)
   .type('{enter}')
     
   
cy.get('.CreateList_title')
 .click( )
   cy.get('.CreateList_input')
    .click()
     .type(Create_list)
      .type('{enter}')


cy.get('[data-cy="list-name"]')
 .should('have.value', Create_list)

})
})