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
  
    cy.get('tbody > tr > .bx--table-column-checkbox > .bx--checkbox--inline > .bx--checkbox-label').should('be.visible').click()
  
    cy.get('.bx--action-list > :nth-child(1)').click()
  
    cy.wait(5000)
  
    cy.get('#name').type('auto_vm')
  
    cy.get('#VMNetworks_tab').click()
  
    cy.wait(5000)
  
    cy.get('div.info-header-margin-left > .bx--data-table-container > .bx--data-table-content > .bx--data-table > tbody > tr > .bx--table-column-checkbox > .bx--checkbox--inline > .bx--checkbox-label').should('be.visible').click()
  
    cy.get('.floatingButtons > .bx--btn--primary').click()
  
    
    cy.wait(150000)
    
  
  });
  });