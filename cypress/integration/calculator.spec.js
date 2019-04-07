describe("Calculator Component Tests", function() {
  it("Loads the home page", function() {
    cy.visit("/");
  });

  it("Click add toggle, enter values, calculate Result", function() {
    //Arrange
    cy.visit("/");
    cy.get("input[value=add]").click();

    //Act
    cy.get("input[type=number]").each(($input, index) => {
      cy.wrap($input).type(5);
    });
    cy.get("button").click();

    //Assert
    cy.get("div > h5").should("have.length", 1);
  });

  it("Click square toggle, expect 1 input, enter values, calculate Result", function() {
    //Arrange
    cy.visit("/");
    cy.get("input[value=square]").click();

    //Act
    cy.get("input[type=number]").each(($input, index) => {
      cy.wrap($input).type(25);
    });
    cy.get("button").click();

    //Assert
    cy.get("input[type=number]").should("have.length", 1);
    cy.get("div > h5").should("have.length", 1);
  });
});
