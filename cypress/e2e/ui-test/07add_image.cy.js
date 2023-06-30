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

    cy.get('#Volume_tab').should('be.visible').click()

    //cy.get('tbody > :nth-child(1) > .bx--table-column-checkbox > .bx--checkbox--inline > .bx--checkbox-label').should('be.visible').click()
    

    cy.wait(3000)

    cy.get('tbody > tr > .bx--table-column-checkbox > .bx--checkbox--inline > .bx--checkbox-label').click()

    cy.get('.bootOrder').should('be.visible').type('0')

    cy.get('.floatingButtons > .bx--btn--primary').should('be.visible').click()

    cy.wait(5000)



});
});