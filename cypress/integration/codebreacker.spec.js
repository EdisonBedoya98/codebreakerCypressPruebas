describe('My first e2e testing', function(){
    it('Check website', function(){
         cy.visit('http://localhost:3001/')           
         cy.get('#numero')
             .type('1234')
             .should('have.value','1234')
        cy.get('#button1')
            .click()
        cy.contains('ok, let the game begins')         
           
        cy.get('#button2')
           .click()
        cy.contains('XXXX')     
        

          
     })
 
 })