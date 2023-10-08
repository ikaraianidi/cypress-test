export class DatepickerPage {
  elements = {
    commonDatepickerInput: () =>
      cy
        .contains("nb-card", "Common Datepicker")
        .find('input[placeholder="Form Picker"]'),
    todayPicker: () => cy.get(".day-cell.today"),
  };

  openCommonDatepicker() {
    this.elements.commonDatepickerInput().click();
  }

  selectToday() {
    this.elements.todayPicker().click();
  }
}
