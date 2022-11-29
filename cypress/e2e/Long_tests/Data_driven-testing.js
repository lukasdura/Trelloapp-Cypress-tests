/// <reference types="cypress" />

  const lists = [
    {
      names:'karol',
      tasks:['1','2', '3'],
    },
    
    {
      names:'peter',
      tasks:['1','2'],
    },
    {
      names:'jano',
      tasks:['1'],
    }]

    lists.forEach ((list, index)=> {
    
    it('Check${list, name}',()=>{
      cy.visit('/board/38623903260')
        cy.get('.List')
         .eq(index)
          .find('.Task')
           .should('have.length', list.tasks.length) 
    
  })
  })
   
   




