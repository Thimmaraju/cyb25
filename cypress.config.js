const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

//const allureCypress = require("allure-cypress/reporter");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {

    projectId: "6dd3io",
    defaultBrowser : "chrome",
    baseUrl: "https://opensource-demo.orangehrmlive.com",

   // specPattern : "cypress/e2e/**/*.dbsqa.{js,jsx,ts,tsx}",

   specPattern: "**/*.feature",

    //baseUrl: "https://www.saucedemo.com/v1",
    video: true,
   // defaultCommandTimeout: 20000, // 4000
   // pageLoadTimeout: 30000,      //60000
    // viewportWidth: 390,  // 1000
    //viewportHeight: 844, // 660
    retries: {"openMode": 3, "runMode": 2},
  //"videosFolder": "cypress/recordedvideos",
  //  "screenshotsFolder": "cypress/pictures",
    env: {

       "username" : "Raju",
       "password" : "Raju@1234",
       "version": "",
       "cookivalue" : "orangehrm=129pu1fo4g5oab7rt28dph61c7"
    },
   watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      // allureCypress(on, config);  // Call allureCypress as a function, passing `on` and `config`

      // return config;

      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }));
        preprocessor.addCucumberPreprocessorPlugin(on, config);
        return config;
      },
  },
});
