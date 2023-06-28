describe('data', () => {
    let get;
   
  
    before(() => {
      cy.fixture('cypress.json').then((data) => {
        get = data;
      });
    });



it('should use values from cypress.json',() => {
    
    cy.visit(get.url)

    cy.get('#username').type(get.userName)

    cy.get('#password').type(get.password)

    cy.get('#loginButton').click()

    cy.contains('a', 'VM list').scrollIntoView().should('be.visible').click()

    cy.get('.bx--header__menu-trigger').click()
    
    cy.wait(1000)

    cy.get('tbody > tr > .bx--table-column-checkbox > .bx--checkbox--inline > .bx--checkbox-label').click()

    cy.get('.bx--action-list > :nth-child(1)').click()

    cy.get('.bx--btn--danger').click()



});
});