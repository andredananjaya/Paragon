const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://recruitment-staging-queenbee.paradev.io',
    browser: 'chrome',
    viewportWidth: 1280,
    viewportHeight: 720,

    // ✅ aktifkan video dan screenshot
    video: true,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,

    // event listener (optional)
    setupNodeEvents(on, config) {
      // implement event listener di sini
    },
  },

  // ✅ Mochawesome reporter
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
