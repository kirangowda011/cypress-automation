
import cypress from "cypress"

describe('Open URL', () => {
    it('Should open a URL', () => {
      
        cy.visit('https://9.114.115.239/')

        cy.get('#username').type('root')
    
        cy.get('#password').type('passw0rd')
    
        cy.get('#loginButton').click()
    
        cy.get(':nth-child(1) > .bx--side-nav__submenu > .bx--side-nav__submenu-title').should('be.visible')
    
        cy.get(':nth-child(6) > .bx--side-nav__menu > :nth-child(3) > .bx--side-nav__link > .bx--side-nav__link-text > .SideNavLink').scrollIntoView().should('be.visible')
    
        cy.get(':nth-child(6) > .bx--side-nav__menu > :nth-child(3) > .bx--side-nav__link > .bx--side-nav__link-text > .SideNavLink').click()
    
        cy.contains('Add').click({force:true})
    
        cy.get('#name').type(Cypress.config('name'))
    
        cy.get('#hmcIP').type(Cypress.config('hmcIP'))
    
        cy.get('#userId').type(Cypress.config('userId'))
    
        cy.get('#password').type(Cypress.config('password'))
    
        cy.get('.bx--modal-footer > .bx--btn--primary').click()
    
    });
  });
  