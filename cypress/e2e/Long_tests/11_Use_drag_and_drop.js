describe('use drag and drop plugin', ()=>{

 const lists = ['first_list', 'second_list',]


it('Prepare enviroment for use drag and drop',()=>{

    cy.request('DELETE', '/api/boards')

    cy.visit('/')


    cy.get('.board_newItem')
     .click()
    
    cy.get('.board_addBoard')
     .click()
      .type('DRAG_FUNCTION{enter}')
    
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
      .type('DRAGandDROP{enter}')

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


})




it('Using drag and drop and confirm operation', () => {

     
    cy.get('.List_tasks')
        .eq(1)
         .as('first')
  
    cy.get('.List_tasks')
     .eq(1)
      .as('second')
  
    cy.get('.Task')
     .drag('@second')

      cy.get('.List')
       . eq(1)
        .find('.Task')
         .eq(0)
          .should('contain.text','DRAGandDROP')
})
})