/// <reference types="cypress" />

describe("First UI tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Validate color themes", () => {
    const colors = {
      Light: "rgb(255, 255, 255)",
      Dark: "rgb(34, 43, 69)",
      Cosmic: "rgb(50, 50, 89)",
      Corporate: "rgb(255, 255, 255)",
    };

    cy.wrap(Object.keys(colors)).each((theme) => {
      cy.get("button.select-button").click();
      cy.contains("nb-option", theme).click();
      cy.get("nb-layout-header nav").should(
        "have.css",
        "background-color",
        colors[theme]
      );
    });
  });

  it("Validate Product Details text in Accordion", () => {
    cy.contains("span.menu-title", "Layout").click();
    cy.contains("span.menu-title", "Accordion").click();

    cy.contains(".item-body", "cloud of dust")
      .eq(0)
      .as("getTextOfFistAccordion");
    cy.get("@getTextOfFistAccordion").should("be.hidden");
    cy.contains("button", "Toggle First Item").click();
    cy.get("@getTextOfFistAccordion").should("be.visible");
  });

  it("Validate Right popover visability", () => {
    cy.contains("span.menu-title", "Modal & Overlays").click();
    cy.contains("span.menu-title", "Popover").click();
    cy.get('[nbpopoverplacement="right"]').trigger("mouseenter");
    cy.contains("nb-popover", "Hello, how are you today?").should("be.visible");
  });

  it("Validate name display in Return Result From Dialog", () => {
    cy.contains("span.menu-title", "Modal & Overlays").click();
    cy.contains("span.menu-title", "Dialog").click();
    cy.contains("button", "Enter Name").click();
    cy.get('[placeholder="Name"]').type("Ihor");
    cy.contains("button", "Submit").click();
    cy.get(".result-from-dialog")
      .find(".ng-star-inserted")
      .should("have.text", "Ihor");
  });
});
