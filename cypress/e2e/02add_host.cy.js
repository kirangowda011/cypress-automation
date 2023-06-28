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

    cy.contains('a', 'Host list').scrollIntoView().should('be.visible').click()

    cy.get('.bx--header__menu-trigger').click()
    
    cy.contains('Add host').should('be.visible').click()

    cy.get('#downshift-0-toggle-button').should('be.visible').click()

    cy.contains('auto_hmc').click()

    cy.get('#findHostButton').click()

    cy.wait(10000)

    cy.get(':nth-child(2) > .bx--table-column-checkbox').should('be.visible').click()

    cy.get('.floatingButtons > .bx--btn--primary').click()



});
});
