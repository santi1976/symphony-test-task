const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseEndpoint: process.env.ENDPOINT,
  baseURL: process.env.BASE_URL,
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
