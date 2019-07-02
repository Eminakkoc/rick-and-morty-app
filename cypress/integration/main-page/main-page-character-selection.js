import queries from '../../../src/common/queries/queries';

describe('Main page character selection', () => {
  it('should scroll and click to a character to reidrect to details page', () => {
    cy.requestInitialPageData();


    cy.wait('@query', { timeout: 5000 }).then((characters) => {
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
