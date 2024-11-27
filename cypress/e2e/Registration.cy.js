describe('Registration Functionality', () => {
  it('Registers a new user successfully', () => {
    // Visit the application
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Navigate to the registration page
    cy.get('#loginPanel a[href*="register.htm"]').click();

    // Fill in the registration form
    const userDetails = {
      firstName: `TestFirst_${Date.now()}`, // Generate unique first name
      lastName: 'Tyles',
      address: 'Street Test',
      city: 'Dublin',git 
      state: 'Irlande',
      zipCode: 'G3T B8G',
      phone: '1 999 999 999',
      ssn: '--',
      username: `user_${Date.now()}`, // Generate unique username
      password: `pass_${Date.now()}`, // Generate unique password
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

    // Validate successful registration
    cy.contains('Your account was created successfully').should('be.visible');

    // Validate successful login 
    cy.contains(userDetails.firstName).should('be.visible');
    // Log generated user details for debugging purposes
    cy.log(`Generated Username: ${userDetails.username}`);
    cy.log(`Generated Password: ${userDetails.password}`);

    // Log out if the application redirects to a logged-in state (optional)
    cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').click();

    // Log in using the generated credentials
    cy.get("input[name='username']").type(userDetails.username);
    cy.get("input[name='password']").type(userDetails.password);
    cy.get("input[value='Log In']").click();

    // Validate successful login
    cy.contains(`Welcome ${userDetails.firstName}`).should('be.visible'); // Check for a welcome message
    cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible'); // Ensure logout link is displayed
  });
});
