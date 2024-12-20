export function reRegistration() {
describe('Re-registration Functionality', () => {
  it('Validate successful re-registration username already exists', () => {
    // Visit the application
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Navigate to the registration page
    cy.get('#loginPanel a[href*="register.htm"]').click();

    // Fill in the registration form
    const userDetails = {
      firstName: 'Gervazio',
      lastName: 'Tyles',
      address: 'Street Test',
      city: 'Dublin',
      state: 'Irlande',
      zipCode: 'G3T B8G',
      phone: '1 999 999 999',
      ssn: '--',
      username: 'Gervazio',
      password: `pass_${Date.now()}`, // Generate unique passwordclear
    };

    cy.get('#customer\\.firstName').type(userDetails.firstName);
    cy.get('#customer\\.lastName').type(userDetails.lastName);
    cy.get('#customer\\.address\\.street').type(userDetails.address);
    cy.get('#customer\\.address\\.city').type(userDetails.city);
    cy.get('#customer\\.address\\.state').type(userDetails.state);
    cy.get('#customer\\.address\\.zipCode').type(userDetails.zipCode);
    cy.get('#customer\\.phoneNumber').type(userDetails.phone);
    cy.get('#customer\\.ssn').type(userDetails.ssn);
    cy.get('#customer\\.username').type(userDetails.username);
    cy.get('#customer\\.password').type(userDetails.password);
    cy.get('#repeatedPassword').type(userDetails.password);

    // Submit the form
    cy.get('[colspan="2"] > .button').click();

    // Validate successful re-registration username already exists.
    cy.contains('This username already exists.').should('be.visible');      
  });
});
}