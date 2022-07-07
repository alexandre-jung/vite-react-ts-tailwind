describe('welcome page', () => {
  beforeEach(() => cy.visit('/'));

  it('matches screenshot', () => {
    cy.document().then(() => {
      cy.compareSnapshot('default', 0);
    });
  });

  it('displays a rotating react logo', () => {
    cy.get('svg.rotate');
  });

  it('displays the tab title', () => {
    cy.title().should('eq', 'Vite + React template project');
  });

  it('displays the main title', () => {
    cy.contains('Vite + React template project');
  });

  it('increments / decrements the counter', () => {
    cy.get('button').contains('+').click();
    cy.get('.counter').contains('1');
    cy.get('button').contains('-').click().click();
    cy.get('.counter').contains('-1');
  });
});
