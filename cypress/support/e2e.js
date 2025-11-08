require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  if (err.message.includes('clientHeight')) {
    return false;
  }
  if (err.message.includes('Request failed with status code 401')) {
    return false;
  }
});
