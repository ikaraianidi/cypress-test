/// <reference types="cypress" />

describe("Open tabs", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Open tab Layout -> Accordion", () => {
    cy.contains("span.menu-title", "Layout").click();
    cy.contains("span.menu-title", "Accordion").click();
  });

  it("Open tab Forms -> Form Layouts", () => {
    cy.contains("span.menu-title", "Forms").click();
    cy.contains("span.menu-title", "Form Layouts").click();
  });
});
