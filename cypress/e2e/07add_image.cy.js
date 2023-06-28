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

    cy.contains('a', 'Image list').scrollIntoView().should('be.visible').click()

    cy.wait(10000)

    cy.get('.bx--header__menu-trigger').click()

    cy.get('.bx--toolbar-content > .bx--btn--primary').click()

    cy.wait(5000)

    cy.get('#name').type(get.image_name)

    cy.get('.floatingButtons > .bx--btn--primary').click()



});
});