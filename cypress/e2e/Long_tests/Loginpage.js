/// <reference types="cypress" />

beforeEach(() => {   
    
cy.request({
  method:'POST', 
   url:'/login',
    body:{
     email:'lukas@lukas.sk',
      password:'lukas'
          
}}).then(user=>{
    cy.setCookie('trello_token', user.body.accessToken)
})   
})

it('Login page before open', () => {

   
    cy.visit('/')

})