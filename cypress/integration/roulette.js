/// <reference types="Cypress" />

describe("Roulette", () => {
  afterEach(() => {
    cy.get("#candidate-area").clear();
  });

  it("displays the candidate when there is only one candidate", () => {
    cy.visit("localhost:8080");
    cy.get("#candidate-area").type("candidate1");
    cy.get("#pick").click();
    cy.get("#result-area").contains("candidate1");
  });

  it("displays one of the candidates when there are two candidates", () => {
    cy.visit("localhost:8080");
    cy.get("#candidate-area").type("candidate1\ncandidate2");
    cy.get("#pick").click();
    cy.get("#result-area").then((resultArea) => {
      if (resultArea.is(":contains('candidate1')")) {
        cy.get("#result-area").contains("candidate1");
        cy.get("#result-area").should("not.contain", "candidate2");
        return;
      }
      if (resultArea.is(":contains('candidate2')")) {
        cy.get("#result-area").contains("candidate2");
        cy.get("#result-area").should("not.contain", "candidate1");
        return;
      }
      throw new Error("Candidates are not displayed in result-area");
    });
  });
});
