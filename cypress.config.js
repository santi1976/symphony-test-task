const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseURL: process.env.CYPRESS_BASE_ENDPOINT ,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
