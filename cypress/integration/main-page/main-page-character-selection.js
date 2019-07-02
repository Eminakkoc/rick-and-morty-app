import queries from '../../../src/common/queries/queries';

describe('Main page character selection', () => {
  it('should scroll and click to a character to reidrect to details page', () => {
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
      cy.get('.card').eq(3).then(element => {
        cy.wrap(element).scrollIntoView({ easing: 'linear', duration: 3000 });
        cy.wrap(element).click();
      });

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/details');
      });
    });

  })
});
