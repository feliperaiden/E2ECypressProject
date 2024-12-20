export function testDemo() {
describe('Launch Application', () => {
  it('Lauch The Test Application', () => {
    cy.visit('https://www.saucedemo.com')
    cy.log('Executing TestDemo');
    });
  });
}