const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {

    baseUrl: "https://opensource-demo.orangehrmlive.com",
    video: true,
   // defaultCommandTimeout: 20000, // 4000
    pageLoadTimeout: 30000,      //60000
    // viewportWidth: 390,  // 1000
    //viewportHeight: 844, // 660
    retries: {"openMode": 3, "runMode": 2},
    env: {

       "username" : "Mahesh",
       "password" : "Mahesh@1234"
    },


    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
