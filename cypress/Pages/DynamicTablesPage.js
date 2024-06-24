class DynamicTablesPage {
  /*Locators */
  getHeading() {
    return cy.get(".is-size-3");
  }

  getTableHeaders() {
    return cy.get("#product_table th");
  }

  getTableRows() {
    return cy.get('tbody').children();
  }
  
  getModalHeading() {
    return cy.get('#modal_title')
  }

  getButton(button) {
    switch (button) {
      case "ADD PRODUCT":
        return cy.get("#add_product_btn");
      case "X":
        return cy.get(".delete");
      case "SUBMIT":
        return cy.get("#submit");
      default:
        throw new Error(`Invalid Button!`);
    }
  }

  getLabel(label) {
    switch (label) {
      case "Please select the quantity":
        return cy.get('[for="product_quantity"]');
      case "Please enter the name of the product":
        return cy.get('[for="product_name"]');
      case "Please enter the price of the product":
        return cy.get('[for="product_price"]');
      default:
        throw new Error(`Invalid Label!`);
    }
  }

  getInputBox(box) {
    switch (box) {
      case "Quantity":
        return cy.get("#quantity");
      case "Product":
        return cy.get("#product");
      case "Price":
        return cy.get("#price");
      default:
        throw new Error(`Invalid Input Box!`);
    }
  }

  getTotal() {
    return cy.get("#total_amount");
  }

  getLastRow() {
    return cy.get('tbody').children().last();
  }

  /*Methods */
}

export default DynamicTablesPage;
