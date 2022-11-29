This app is copied from Filip Hric. You can find the app on this link : https://github.com/filiphric/trelloapp.git

For first you run **npm install**, after instaling you only open the app with **npm start**

My tests are in ***Trelloapp-Cypress-tests/cypress/e2e/***

Tests are divided to two sections ***Long_tests***   and   ***Short_example_tests***

**Long_tests** are mostly API tests and they are relatively long because of character of this app. (by writing some tests, you reset the application and other tests fail for this reason, so it is quite often necessary to start the tests from the beginning) 

**Short_example_tests** are simple tests written mostly for testing UI and basic functions of the application

In section Actions is set CI via GitHub actions.






