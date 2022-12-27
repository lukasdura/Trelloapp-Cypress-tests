var email    = 'lukas15@lukas.sk'
var password = 'lukas'


describe('Try to Sign up with UI to page and sent welcome mail', ()=>{


it('', ()=>{

cy.visit('/')

 cy.get('[data-cy="login-menu"]')
  .click()
    cy.get(':nth-child(2) > .LoginModule_logSignSwitch > a')
     .click({force: true})

  cy.get('[data-cy="welcome-email-checkbox"]')
   .click()  
     cy.get('[data-cy="signup-email"]')
      .click()
       .type(email)
        .type('{enter}')

 cy.get('[data-cy="signup-password"]')
 .click('')
  .type(password)
   .type('{enter}')  


 cy.get('[data-cy="welcome-email-checkbox"]')
  .click()  


cy.get('#loginMessage')
.should('be.visible')
 .should('contain.text','User is logged in')


cy.get('[data-cy="logged-user"]')
.should('contain.have.text', email)


cy.get('#loginMessage')
 .should('be.visible')
  .should('contain.text','User is logged in')


cy.get('[data-cy="logged-user"]')
 .should('contain.have.text', email)



})
})