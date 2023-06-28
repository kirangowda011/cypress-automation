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

    cy.contains('a', 'Network list').scrollIntoView().should('be.visible').click()

    //cy.get(':nth-child(5) > .bx--side-nav__menu > .bx--side-nav__menu-item > .bx--side-nav__link > .bx--side-nav__link-text > .SideNavLink').should('be.visible').click()

    cy.wait(10000)

    cy.get('.bx--header__menu-trigger').click()

});
});
