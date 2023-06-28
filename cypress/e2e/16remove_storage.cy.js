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

    cy.get('tbody > tr > .bx--table-column-checkbox > .bx--checkbox--inline > .bx--checkbox-label').click()

    cy.get('.bx--action-list > :nth-child(4)').click()

    cy.get('.pills-tab-section > .associate-checkbox > .bx--form-item > .bx--checkbox-label').click()

    cy.get('.bx--modal-footer > .bx--btn--primary').click()



});
});