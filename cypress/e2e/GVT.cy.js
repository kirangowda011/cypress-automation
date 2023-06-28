describe('Mock Language', () => {
    it('Localization Language', () => {
      
    cy.visit('https://9.114.115.239/', {
    onBeforeLoad(win) {
    Object.defineProperty(win.navigator, 'language', { value: 'nl' });
    Object.defineProperty(win.navigator, 'languages', { value: ['nl'] });
    Object.defineProperty(win.navigator, 'accept_languages', { value: ['nl'] });
    
    },
    headers: {
    'Accept-Language': 'nl',
    },
    });
    cy.get('#username').type('root')

    cy.get('#password').type('passw0rd')

    cy.get('#loginButton').click()

    cy.contains('Dutch').then(($element) => {
        if ($element.length > 0) {
            cy.log('Element found!');
        } else {
          cy.log('Element not found!');
        }
      });

    
    });
    })