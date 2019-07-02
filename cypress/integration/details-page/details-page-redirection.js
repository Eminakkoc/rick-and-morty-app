describe('Details page redirection', () => {
  it('should redirect to main page if refreshed', () => {
    cy.requestInitialPageData();

    cy.wait('@query', { timeout: 5000 }).then(() => {
      cy.get('.card').eq(3).then(element => {
        cy.wrap(element).scrollIntoView({ easing: 'linear', duration: 3000 });
        cy.wrap(element).click();
      });

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/details');
      });

      cy.wait('@query', { timeout: 5000 }).then(() => {
        cy.reload();
        cy.location().should((loc) => {
          expect(loc.pathname).to.eq('/main');
        });
      });
    });

  })

  it('should redirect to main page if entry point is details page', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/main');
    });
  })
});
