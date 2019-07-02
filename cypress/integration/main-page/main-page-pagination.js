describe('Main page pagination', () => {
  it('should scroll to bottom and fetch and display new data', () => {
    cy.requestInitialPageData();

    cy.wait('@query', { timeout: 5000 }).then(() => {
      //number of character cards should be 20
      cy.get('.card').should('have.length', 20);
      cy.scrollTo('bottom', { easing: 'linear', duration: 3000 });
    });

    cy.wait('@query', { timeout: 5000 }).then(() => {
      //number of character cards should be 40
      cy.get('.card').should('have.length', 40);
      cy.scrollTo('bottom', { easing: 'linear', duration: 3000 });
    });

    cy.wait('@query', { timeout: 5000 }).then(() => {
      //number of character cards should be 60
      cy.get('.card').should('have.length', 60);
    });
  })
});
