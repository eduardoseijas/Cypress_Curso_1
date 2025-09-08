const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  projectId: '5z77ch',
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    //specPattern: 'cypress/e2e/**/*.feature',

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      return config;
    },

    // 👇 ruta EXACTA a tus steps
    stepDefinitions: 'cypress/e2e/**/step_definitions/**/*.{js,ts}',

    // (el resto de tu config)
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    testIsolation: false,
    pageLoadTimeout: 4000,
    defaultCommandTimeout: 2000,
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  },
});