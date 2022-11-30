This app is copied from Filip Hric. You can find the app on this link : https://github.com/filiphric/trelloapp.git

For run the aplication you have to instal the app via  **npm install**, and after instaling you open the app with **npm start** 

For run Cypress you have to instal Cypress via **npm install cypress --save-dev** and after instaling you open Cypress with **npx cypress open**

My tests are created in ***Trelloapp-Cypress-tests/cypress/e2e/***

Tests are divided to two sections ***Long_tests***   and   ***Short_example_tests***

**Long_tests** are mostly API tests and they are relatively long because of character of this app. (by writing some tests, you reset the application and other tests fail for this reason, so it is quite often necessary to start the tests from the beginning - this means that when yo want to create for example a task and test before has reset you database, you have to create everithing from the begining BOARD->LIST->TASK. ) 

**Short_example_tests** are simple tests written mostly for testing UI and basic functions of the application

In section Actions is set CI via GitHub actions.






