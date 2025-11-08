# Cypress Headless Mode Configuration Guide

## Configuration File (cypress.config.js)

The headless mode can be set in the configuration file:

```javascript
module.exports = defineConfig({
  e2e: {
    // Set headless mode here
    headless: false,  // false = show browser, true = headless
    browser: 'chrome',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
```

## Command Line Options

### Run in Headless Mode (no browser window)
```bash
# Using npx
npx cypress run --headless

# Or with specific browser
npx cypress run --browser chrome --headless

# Or with specific spec file
npx cypress run --spec "cypress/e2e/complete-login-flow.cy.js" --headless
```

### Run in Headed Mode (show browser window)
```bash
# Using npx
npx cypress run --headed

# Or with specific browser
npx cypress run --browser chrome --headed

# Or with specific spec file
npx cypress run --spec "cypress/e2e/complete-login-flow.cy.js" --headed
```

### Open Cypress Test Runner (Interactive Mode)
```bash
# Always opens in headed mode
npx cypress open
```

## Environment Variables

You can also control headless mode via environment variables:

```bash
# Windows PowerShell
$env:CYPRESS_headless="true"
npx cypress run

# Or in one line
CYPRESS_headless=true npx cypress run
```

## Package.json Scripts

Add these scripts to your package.json for easy access:

```json
{
  "scripts": {
    "test:headless": "cypress run --headless",
    "test:headed": "cypress run --headed",
    "test:open": "cypress open",
    "test:chrome:headless": "cypress run --browser chrome --headless",
    "test:chrome:headed": "cypress run --browser chrome --headed"
  }
}
```

Then run:
```bash
npm run test:headless
npm run test:headed
npm run test:open
```

## Examples

### Run specific test in headless mode
```bash
npx cypress run --spec "cypress/e2e/complete-login-flow.cy.js" --headless --browser chrome
```

### Run all tests in headed mode
```bash
npx cypress run --headed --browser chrome
```

### Run with specific viewport in headless mode
```bash
npx cypress run --headless --browser chrome --config viewportWidth=1920,viewportHeight=1080
```

## Current Configuration

Your current setting in cypress.config.js:
- `headless: false` (headed mode - browser will show)
- `browser: chrome`
- `viewportWidth: 1280`
- `viewportHeight: 720`

## Quick Commands

```bash
# Headless (no browser window)
npx cypress run --headless

# Headed (show browser window)
npx cypress run --headed

# Interactive mode
npx cypress open
```