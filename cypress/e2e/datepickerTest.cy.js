/// <reference types="cypress" />
import { DatepickerPage } from "../pages/datePickerPage";
import { NavigationMenu } from "../pages/components/navigationMenuComponent";
import moment from "moment";

describe("Datepicker test suite", () => {
  const navigateThroughMenu = new NavigationMenu();
  const datepicker = new DatepickerPage();
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
