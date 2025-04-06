import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://petstore.octoperf.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
