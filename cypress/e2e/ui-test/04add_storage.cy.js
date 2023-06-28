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

    cy.contains('a', 'Storage list').scrollIntoView().should('be.visible').click()

    cy.wait(10000)

    cy.get('.bx--header__menu-trigger').click()

    cy.get('.bx--toolbar-content > .bx--btn--primary').click()

    cy.wait(8000)

    cy.get('#displayName').type(get.displayName)

    cy.get('#storageHostName').type(get.storageHostName)

    cy.get('#storageUserName').type(get.storageUserName)

    cy.get('#storageUserPassword').type(get.storageUserPassword)

    cy.get('.bx--col-lg-5 > .bx--btn--sm').click()

    cy.wait(10000)

    cy.get('.floatingButtons > .bx--btn--primary').click()

    cy.get('.bx--toolbar-content > .bx--btn--ghost').click()

    cy.wait(5000)

    cy.get('.bx--toolbar-content > .bx--btn--ghost > .bx--btn__icon').click()

    cy.wait(5000)

    cy.get('.bx--toolbar-content > :nth-child(5)').click()







});

});

