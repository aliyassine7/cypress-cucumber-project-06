import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DynamicTablesPage from "../../Pages/dynamicTablesPage";

const dynamicTablesPage = new DynamicTablesPage()

Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
});

Then(/^the user should see the "([^"]*)" heading$/, () => {
	dynamicTablesPage.getHeading().should('be.visible')
});

Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

  dynamicTablesPage.getTableHeaders().each(($el, index) => {
    cy.wrap($el).should('have.text', arr[index])
  })
});

Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()
  cy.log(arr)

  cy.get('#product_table td').each(($el, index) => {
    cy.wrap($el).should('have.text', arr[index])
  })
  
	// dynamicTablesPage.getTableRows().each(($el, outerIndex) => {
  //   cy.wrap($el).children().each(($cell, innerIndex) => {
  //     cy.wrap($cell).should('have.text', arr[outerIndex][innerIndex])
  //   })
  // })
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
	dynamicTablesPage.getButton(button)
});

Then(/^the user should see the "([^"]*)" text displayed$/, (text) => {
	dynamicTablesPage.getTotal(text)
});

When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	dynamicTablesPage.getButton(button).click()
});

Then(/^the user should see the "([^"]*)" modal with its heading$/, () => {
	dynamicTablesPage.getModalHeading().should('be.visible')
});

Then(/^the user should see the "([^"]*)" label$/, (label) => {
	dynamicTablesPage.getLabel(label).should('have.text', label)
});

Then(/^the user should see the "([^"]*)" input box is enabled$/, (box) => {
	dynamicTablesPage.getInputBox(box).should('be.enabled')
});

Then(/^the user should not see the "([^"]*)" modal$/, () => {
	dynamicTablesPage.getModalHeading().should('not.exist')
});

Then(/^the user enters the "([^"]*)" as "([^"]*)"$/, (box, input) => {
	dynamicTablesPage.getInputBox(box).type(input)
});

Then(/^the user should see the table with the new row below$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()
  
  dynamicTablesPage.getLastRow().children().each(($el, index) => {
    cy.wrap($el).should('have.text', arr[index])
  })
});











