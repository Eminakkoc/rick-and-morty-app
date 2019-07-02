describe('Details page info', () => {
  it('should display selected character frame with given style', () => {
    cy.requestInitialPageData();

    cy.wait('@query', { timeout: 5000 }).then(() => {
      //number of character cards should be 20
      cy.get('.card').should('have.length', 20);
      cy.scrollTo('bottom', { easing: 'linear', duration: 4000 });
    });

    cy.wait('@query', { timeout: 5000 }).then(() => {
      //number of character cards should be 40
      cy.get('.card').should('have.length', 40);
      cy.get('.card').eq(24).then(element => {
        cy.wrap(element).scrollIntoView({ easing: 'linear', duration: 3000 });
        cy.wrap(element).click();
        cy.location().should((loc) => {
          expect(loc.pathname).to.eq('/details');
        });
      });

      cy.wait('@query', { timeout: 9000 }).then(() => {
        const characterFrame = cy.get('.details-card');
        characterFrame.should('have.css', 'width', '700px');
        characterFrame.should('have.css', 'margin-top', '30px');
        characterFrame.should('have.css', 'margin-bottom', '30px');
      });
    });
  })

  it('should display selected character frame and return to main page', () => {
    cy.requestInitialPageData();

    cy.wait('@query', { timeout: 5000 }).then(() => {
      //number of character cards should be 20
      cy.get('.card').should('have.length', 20);
      cy.scrollTo('bottom', { easing: 'linear', duration: 4000 });
    });

    cy.wait('@query', { timeout: 5000 }).then(() => {
      //number of character cards should be 40
      cy.get('.card').should('have.length', 40);
      cy.get('.card').eq(24).then(element => {
        cy.wrap(element).scrollIntoView({ easing: 'linear', duration: 3000 });
        cy.wrap(element).click();
        cy.location().should((loc) => {
          expect(loc.pathname).to.eq('/details');
        });
      });

      cy.wait('@query', { timeout: 9000 }).then(() => {
        cy.wait(3000);
        cy.get('.back-button').click();
        cy.location().should((loc) => {
          expect(loc.pathname).to.eq('/main');
        });
      });
    });
  })
});
