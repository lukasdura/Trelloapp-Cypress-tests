let retries = 0
let maxretries = 7

Cypress.Commands.add('checklists',()=>{

   cy.request({
    method:'GET', 
     url:'/api/boards/*',
      headers:{
     
     accept: 'application/json, text/plain, */*',
 
    }}).then(board=>{

      if (board.body.lists.length===3) {

      return
    }
      if (retries === maxretries){
     throw new Error('lists lenght was never 4')
    }

      else{

        cy.wait(1000)

        .checklistlength()

        retries++

      }})})


it('Check list length', () => {




  cy
    .visit('/board/29000904550')

  cy.checklists()

})

