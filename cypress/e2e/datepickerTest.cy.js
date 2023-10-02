/// <reference types="cypress" />
import { datepickerPage } from "../pages/datePickerPage";
import { navigationMenu } from "../pages/components/navigationMenuComponent";
import moment from "moment";

describe("Datepicker test suite", () => {
  const navigateThroughMenu = new navigationMenu();
  const datepicker = new datepickerPage();
  const formsMenuItem = "Forms";
  const datepickerMenuItem = "Datepicker";

  beforeEach(() => {
    cy.visit("/");
    navigateThroughMenu.openMenuItemByValue(formsMenuItem);
    navigateThroughMenu.openMenuItemByValue(datepickerMenuItem);
  });

  it("Validate today date selection", () => {
    const todayDate = moment().format("MMM D, YYYY");

    datepicker.openCommonDatepicker();
    datepicker.selectToday();
    datepicker.elements.commonDatepickerInput().should("have.value", todayDate);
  });
});
