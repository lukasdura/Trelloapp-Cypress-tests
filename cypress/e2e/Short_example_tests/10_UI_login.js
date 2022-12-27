
var email    = 'lukas@lukas.sk'
var password = 'lukas'


describe('Try to login with UI to page', ()=>{


it('', ()=>{

cy.visit('/')

 cy.get('[data-cy="login-menu"]')
  .click()
    cy.get('[data-cy="login-email"]')
     .click()
      .type(email)
       .type('{enter}')

cy.get('[data-cy="login-password"]')      
 .click('')
  .type(password)
   .type('{enter}')  


cy.get('#loginMessage')
 .should('be.visible')
  .should('contain.text','User is logged in')


cy.get('[data-cy="logged-user"]')
 .should('contain.have.text', email)

})
})