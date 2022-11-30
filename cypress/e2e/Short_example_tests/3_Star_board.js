describe('Star a board', ()=>{
 
    const Create_board = 'new_board'
          
    it('Prepare enviroment for staring board', ()=>{
        
            cy.visit('/')
             cy.get('.board_newItem')
              .click()
               cy.get('.board_addBoard')
                .click()
                 .type(Create_board)  
                  .type('{enter}')
             
            
            
        })

    it('Star board and check staring', ()=>{

       cy.intercept('PATCH', '/api/boards/*')
        .as('starr')


       
       cy.visit('/')
          
        cy.get('[data-cy="star"]')
           .first()
            .click({force: true})
               
        cy.get('[data-cy="star"]')
         .first()
            
         cy.wait('@starr').then(board=>{
            
          expect(board.response.body.starred).to.eq(true)    



       })
       })
       })