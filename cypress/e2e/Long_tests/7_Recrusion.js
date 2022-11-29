let retries = 0
let maxretries = 7

const boards = ['first', 'second', 'third', 'fourth', 'fift', 'sixth', 'seventh']

describe('The number of boards does not agree',()=>{

  beforeEach(()=>{

    cy.request('DELETE','/api/boards')
     })

Cypress.Commands.add('checkboards',()=>{

   cy.request({
    method:'GET', 
     url:'/api/boards/',
      headers:{
     
     accept: 'application/json, text/plain, */*',
 
    }}).then(board=>{

    if (board.body.lists.length===7) {
     return
    }
     if (retries === maxretries){
     throw new Error('boards lenght was never 7')
    }
     else{

    cy.wait(500)

    .checkboards()

    retries++

    }})})


it('Check boards length', () => {

  cy
    .visit('/')

  cy.checkboards()

})
})


 
     


  
describe.only('The number of boards does agree',()=>{


  beforeEach(()=>{

    cy.request('DELETE','/api/boards')
    
    
  })

  Cypress.Commands.add('checkboards',()=>{
  
     cy.request({
      method:'GET', 
       url:'/api/boards/',
        headers:{
       
       accept: 'application/json, text/plain, */*',
   
      }}).then(board=>{
  
      if (board.body.length===7) {
       return
      }
       if (retries === maxretries){
       throw new Error('boards lenght was never 7')
      }
       else{
  
      cy.wait(500)
  
      .checkboards()
  
      retries++
  


      }})})

     
  
  
  
  
  it('Check boards length', () => {
  
    boards.forEach(board=>{
   
      cy.request('POST', '/api/boards',{
       name: board
 
      
      })
     })
    cy
      .visit('/')
  
    cy.checkboards()
  
  })
  })
  