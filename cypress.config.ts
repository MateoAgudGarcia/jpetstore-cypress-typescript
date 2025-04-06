import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    charts: true,
    reportPageTitle: 'index',
    embeddedScreenshots: true,
  },
  retries: {
    runMode: 3,
    openMode: 0,
  },
  e2e: {
    baseUrl: 'https://petstore.octoperf.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    screenshotsFolder: 'cypress/results/screenshots',
    setupNodeEvents(on) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
