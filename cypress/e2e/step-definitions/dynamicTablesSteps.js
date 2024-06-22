import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.get(url)
});
