# Cypress Automated Testing Project

This project contains a set of automated tests created with [Cypress](https://www.cypress.io/) to test the functionality of the Beyondly recruitment portal.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/andredananjaya/Paragon.git
    cd Paragon
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Dependencies

This project uses the following development dependencies:

- `cypress`: Automated testing framework.
- `cypress-xpath`: Adds XPath support to Cypress.
- `mochawesome`: Custom report generator for Mocha.
- `mochawesome-merge`: Merges multiple Mochawesome reports.
- `mochawesome-report-generator`: Generates HTML reports from Mochawesome's JSON output.

## Test Suite Structure

The test suite is organized as follows to ensure separation of concerns and readability:

- **`cypress/e2e/add-product.cy.js`**: The main test specification file containing the test flow for adding a product to the cart.
- **`cypress/support/add-product.js`**: Contains the `DashboardLogin` class with reusable methods for interacting with the pages.
- **`cypress/support/selectors.js`**: Exports all XPath selectors used in the tests, organized by page.
- **`cypress/fixtures/users.json`**: Stores test data, such as user credentials.

## Running Tests

### Open the Cypress Test Runner

To open the Cypress Test Runner and run tests interactively:

```bash
npx cypress open
```

### Run Tests in Headless Mode

To run all tests in headless mode from the command line:

```bash
npx cypress run
```

To run a specific test:

```bash
npx cypress run --spec "cypress/e2e/add-product.cy.js"
```
