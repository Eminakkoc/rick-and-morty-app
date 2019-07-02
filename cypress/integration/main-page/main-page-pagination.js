import queries from '../../../src/common/queries/queries';

describe('Main page pagination', () => {
  it('should scroll to bottom and fetch and display new data', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'https://rickandmortyapi.com/graphql',
      delay: 1000,
      status: 200}).as('getCharacters');
    cy.visit('http://localhost:3001/main', {
      onBeforeLoad (win) {
        delete win.fetch
      }
    });

    cy.wait('@getCharacters', { timeout: 5000 }).then((characters) => {
      //number of character cards should be 20
      cy.get('.card').should('have.length', 20);
      cy.scrollTo('bottom', { easing: 'linear', duration: 3000 });
    });

    cy.wait('@getCharacters', { timeout: 5000 }).then((characters) => {
      //number of character cards should be 40
      cy.get('.card').should('have.length', 40);
      cy.scrollTo('bottom', { easing: 'linear', duration: 3000 });
    });

    cy.wait('@getCharacters', { timeout: 5000 }).then((characters) => {
      //number of character cards should be 60
      cy.get('.card').should('have.length', 60);
    });
  })
});
