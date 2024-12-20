export function dynamicDropdown() {
describe('Handle Dynamic Dropdowns functionality', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Ignore uncaught exceptions
      return false;
    });
  });

  it('Dynamic dropdown', () => {
    cy.visit('https://demoqa.com/select-menu');
    
    cy.get('#withOptGroup')
      .click()
      .type('Group 2, option 1');

    cy.get('.css-26l3qy-menu')
      .should('be.visible')
      .contains('Group 2, option 1')
      .click();

    cy.get('#withOptGroup').parent().find('span').should('contain', 'Group 2, option 1');
  });
});
}