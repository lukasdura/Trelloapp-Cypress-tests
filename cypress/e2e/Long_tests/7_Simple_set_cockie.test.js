describe('Set cookies before visit page', ()=>{     


it('Set cookies before visit page', () => {

cy.setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1a2FzQGx1a2FzLnNrIiwiaWF0IjoxNjY5NjQwOTIxLCJleHAiOjE2Njk2NDQ1MjEsInN1YiI6IjEifQ.Nb8z8bbUhbXH3VX7Z0y5DaBt93902HX0LcMmzaJCTqU')
    
    
   cy.visit('/')

   cy.get('#loginMessage')
    .should('be.visible')
     .should('contain.text','User is logged in')

   
        
})
})