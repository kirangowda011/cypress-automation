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

    cy.contains('a', 'Data volumes').scrollIntoView().should('be.visible').click()

    cy.wait(10000)

    cy.get('.bx--header__menu-trigger').click()

    cy.get('.bx--toolbar-content > .bx--btn--primary').click()

    cy.wait(4000)

    cy.get('#volumeName').should('be.visible').type(get.volumeName)

    cy.get('#description').should('be.visible').type(get.description)

    cy.get('.bx--list-box__menu-icon').click()

    cy.contains('auto_svc_107').click()

    cy.get('.floatingButtons > .bx--btn--primary').click()


});
});