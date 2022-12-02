describe('Create board and check', ()=>{
 

  
const Create_board = 'new_board'
      
    it('', ()=>{
    
        cy.visit('/')
         cy.get('.board_newItem')
          .click()
           cy.get('.board_addBoard')
            .click()
             .type(Create_board)  
              .type('{enter}')
         
        cy.get('.boardDetail_title')     
         .should('have.value', Create_board)
           .should('be.visible')
            .should('have.length',1)
        
    })
    })