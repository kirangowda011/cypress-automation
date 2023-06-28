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

    cy.wait(10000)

    cy.get('.bx--toolbar-content > .bx--btn--primary').click()

    cy.wait(5000)

    cy.get('#downshift-0-toggle-button > .bx--list-box__menu-icon').click()

    cy.contains('auto_image').click()

    cy.get('#name').type('auto_vm')

    cy.get('#downshift-2-toggle-button > .bx--list-box__menu-icon').click()

    cy.contains('P8_107').click()

    cy.get('#processingUnits').clear().type('0.1')

    cy.get('#VMNetworks_tab').click()

    cy.wait(5000)

    cy.get('div.info-header-margin-left > .bx--data-table-container > .bx--data-table-content > .bx--data-table > tbody > tr > .bx--table-column-checkbox > .bx--checkbox--inline > .bx--checkbox-label').click()

    cy.get('#VMVolumes_tab').click()

    cy.wait(3000)

    // need to check the network tab, network not seen

    cy.get('.floatingButtons > .bx--btn--primary').click()

    cy.wait(3000)

    cy.get('tbody > tr > .bx--table-column-checkbox > .bx--checkbox--inline > .bx--checkbox-label').click()



});
});