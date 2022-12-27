describe('Create board and list and task and check', ()=>{
 
    var Create_board  = 'new_board'
    var Create_list   = 'new_list'  
    var Create_task   = 'new_task'             
    
    
    
    it('Preparing enviroment for mark task', ()=>{
    
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

    cy.get('.List_addTask')
     .click()  
       cy.get('[data-cy="task-input"]')
        .click()
         .type(Create_task)
          .type('{enter}')
    

    cy.get('.Task')     
     .should('contain.text', Create_task)
      .should('be.visible')
       .should('have.length.at.least', 1)
    })

    it('Mark task and check marking', ()=>{

      cy.get('[data-cy="task-done"]')    
       .check()

         cy.get('.Task label')
          .should('have.class','completed')
    })
   })