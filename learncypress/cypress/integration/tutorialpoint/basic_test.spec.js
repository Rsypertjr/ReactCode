/// <reference types="cypress" />

// For execution from the command line, run : ./node_modules/.bin/cypress run,
//                                            ./node_modules/cypress run --spec "<spec file path>" 
//                                            ./node_modules/cypress run -- browser firefox
//                                            ./node_modules.cypress run -- headed


// For execution from the Test Runner, run : ./node_modules/.bin/cypress open


//test suite name
describe('Tutorialspoint Test', function (){
    //Test case
    it('Scenario 1', function(){
        // test step for URL launching 
        cy.visit("https://www.google.com/");         

    });
});