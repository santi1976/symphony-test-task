const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: process.env.BASE_URL,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});