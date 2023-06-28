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

    cy.get(':nth-child(5) > .bx--side-nav__menu > .bx--side-nav__menu-item > .bx--side-nav__link > .bx--side-nav__link-text > .SideNavLink').should('be.visible').click()

    cy.wait(10000)

    cy.get('.bx--header__menu-trigger').click()

    cy.get('.bx--toolbar-content > .bx--btn--primary').click()

    // cy.wait(8000)

    cy.get('#name').should('be.visible').type(get.network_name)

    cy.get('#NetworkType').type(get.network_name)

    cy.get('#vlanID').clear()

    cy.get('#vlanID').type(get.vlanID)

    cy.get('#cidr').type(get.cidr)

    cy.get('#gatewayIP').type(get.gatewayIP)

    cy.get('#iprange').type(get.iprange)

    cy.get('.floatingButtons > .bx--btn--primary').click()


});

});
