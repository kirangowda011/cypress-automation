/// <reference types="cypress"/>


describe('data', () => {
    let get;
   
  
    before(() => {
      cy.fixture('cypress.json').then((data) => {
        get = data;
      });
    });



it('should use values from cypress.json',() => {
    
    cy.visit("https://9.114.115.239/")

    cy.get('#username').type(get.userName)

    cy.get('#password').type(get.password)

    cy.get('#loginButton').click()

    cy.contains('a', 'HMCs').scrollIntoView().should('be.visible').click()

    cy.contains('Add').should('be.visible').click({force:true})

    cy.get('#name').type(get.hmc_name)

    cy.get('#hmcIP').type(get.hmc_IP)

    cy.get('#userId').type(get.hmc_user_Id)

    cy.get('#password').type(get.hmc_password)

    cy.get('.bx--modal-footer > .bx--btn--primary').click()

});

});