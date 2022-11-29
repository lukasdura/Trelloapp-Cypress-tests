describe('Open the page and check', ()=>{


it('', ()=>{

    cy.visit('/')
     cy.get('.board_title')
      .should('contain.text', 'Create a board')
       .should('be.visible')
        .should('have.length.at.least',1)
    
})
})