/// <reference types="cypress" />
     
     var email= 'lukas@lukas.sk'
     var password = 'lukas'


describe('Login page before open', ()=>{     

beforeEach(() => {   
    
cy.request({
  method:'POST', 
   url:'/login',
    body:{
     email:email,
      password:password
          
}}).then(user=>{
    cy.setCookie('trello_token', user.body.accessToken)
})   
})

it('Login page before open', () => {

   
    cy.visit('/')

    cy.get('#loginMessage')
     .should('be.visible')
      .should('contain.text','User is logged in')

    cy.get('[data-cy="logged-user"]')
     .should('contain.have.text', email)

})
})