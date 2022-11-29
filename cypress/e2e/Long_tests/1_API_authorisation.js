/// <reference types="cypress" />

beforeEach(()=>{

  cy.request('DELETE', '/api/boards')

  cy.request ('POST', '/api/boards',{
   name:'newboard'
 
  })
  cy.request({
   
    method: 'POST',
     url:'api/boards',
      body:{
       name:'myboard',
    },
    headers:{
      accept: 'application/json, text/plain, */*',
       authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1a2FzQGx1a2FzLnNrIiwiaWF0IjoxNjY5NzI3NDY0LCJleHAiOjE2Njk3MzEwNjQsInN1YiI6IjEifQ.ApHtq4Wn5kZtPnggRwnJ2_Mp8XblvUGh-RUlDTJQZmY'

}})
})

it('Check user id', () => {

    cy.request({
     method:'GET',
      url:'/api/boards',
       headers:{
         accept: 'application/json, text/plain, */*',
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1a2FzQGx1a2FzLnNrIiwiaWF0IjoxNjY5NjQxMjM1LCJleHAiOjE2Njk2NDQ4MzUsInN1YiI6IjEifQ.B5uD2lozggsXS4v09_l8z0alMgJ6wMkuDlBo-Ph6dOM'
    
    
    }}).then(board=>{
     let newboard = Cypress._.find(board.body,{name:'newboard'})
      expect(newboard.user).to.eq(0)
    
    let myboard= Cypress._.find(board.body,{name:'myboard'})
      expect(myboard.user).to.eq(1)
    
       expect(board.body).have.length('2')
    
    })
    
    cy.request({
      method:'GET',
       url:'/api/boards',
        headers:{
          accept: 'application/json, text/plain, */*',
      
      } }).then(board=>{
             let newboard = Cypress._.find(board.body,{name:'newboard'})
               expect(newboard.user).to.eq(0)
                expect(board.body).have.length('1')
      
    
    cy.visit('/')
    
    
    })
    })