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
    cy.get("#result-area").contains(/candidate1|candidate2/g);
  });
});
