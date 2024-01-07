const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseEndpoint: process.env.CYPRESS_ENDPOINT,
  baseURL: process.env.CYPRESS_BASE_URL,
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
