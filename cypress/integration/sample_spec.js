/// <reference types="Cypress" />

describe("Roulette", () => {
  it("displays the candidate when there is only one candidate", () => {
    cy.visit("localhost:8080");
    cy.get("#candidate").type("candidate1");
    cy.get("#start").click();
    cy.get("#stop").click();
    cy.get("#result").should("contain", "candidate1");
  });
});
