const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  responseTimeout: 120000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    defaultCommandTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.booking.com/',
  },
});
