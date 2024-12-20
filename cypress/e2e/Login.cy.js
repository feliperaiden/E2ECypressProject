export function login() {
describe('Launch Application', () => {
  it('Launch The Test Application and Enter Credentials', () => {
    // Generate dynamic credentials using the current timestamp
    const user = {
      username: `user_${Date.now()}`, // Create a unique username
      password: `pass_${Date.now()}`, // Create a unique password
    };

    // Visit the application URL
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Fill in the login form with generated credentials
    cy.get("input[name='username']").type(user.username);
    cy.get("input[name='password']").type(user.password);

    // Log the generated credentials for debugging purposes
    cy.log(`Username: ${user.username}, Password: ${user.password}`);
   // cy.get("input[value='Log In']").click(); // Click the login button
  });
});
}