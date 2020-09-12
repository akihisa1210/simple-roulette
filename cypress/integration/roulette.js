/// <reference types="Cypress" />

describe("Roulette", () => {
  it("displays the candidate when there is only one candidate", () => {
    cy.visit("localhost:8080");
    cy.get("#candidate-area").type("candidate1");
    cy.get("#pick").click();
    cy.get("#result-area").should("contain", "candidate1");
  });
});
