import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: 'index',
    overwrite: true,
    html: true,
    json: false,
  },
  retries: {
    runMode: 3,
    openMode: 0,
  },
  e2e: {
    baseUrl: 'https://petstore.octoperf.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    screenshotsFolder: 'mochawesome-report/assets',
  },
});
