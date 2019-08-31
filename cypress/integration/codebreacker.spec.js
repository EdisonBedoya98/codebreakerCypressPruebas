describe('My first e2e testing', function(){
    it('Check website', function(){
         //Arrange
         // - visit some place
         cy.visit('http://localhost:3001/')
         //Act
         // Search a element y click
         //cy.contains('set').click()
         //Assert       
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
   /*  it('Search an Iphone',function(){
         cy.visit('http://localhost:4200/')
         cy.contains('Estefany')
         cy.get('input')
             .type('iphone 8 plus 64gb')
             .should('have.value','iphone 8 plus 64gb')
         cy.get('button')
             .click()
         cy.contains('iPhone')
 
         cy.get('input')
             .clear()
             .type('Nikon 750')
             .should('have.value','Nikon 750')
         cy.get('button')
         .click()
         cy.contains('Nikon')
 
     
     })*/
 
 })