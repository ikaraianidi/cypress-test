export class registerPage {
  elements = {
    fullNameInput: () => cy.get("#input-name"),
    emailInput: () => cy.get("#input-email"),
    passwordInput: () => cy.get("#input-password"),
    repeatPasswordInput: () => cy.get("#input-re-password"),
    agreeToTermsCheckbox: () => cy.get(".custom-checkbox"),
    registerButton: () => cy.contains("button", "Register"),
    errorMessage: (message) => cy.get(".form-control-group").contains(message),
  };

  enterFullNameValue(fullNameValue) {
    this.elements.fullNameInput().type(fullNameValue);
  }

  enterEmailValue(emailValue) {
    this.elements.emailInput().type(emailValue);
  }
  enterPasswordValue(passwordValue) {
    this.elements.passwordInput().type(passwordValue);
  }
  enterRepeatPasswordValue(repeatPasswordValue) {
    this.elements.repeatPasswordInput().type(repeatPasswordValue);
  }
  clickAgreeToTermsCheckbox() {
    this.elements.agreeToTermsCheckbox().click();
  }
  clickRegisterInButton() {
    this.elements.registerButton().click();
  }
  checkErrorMessageVisibilityByText(message) {
    this.elements.errorMessage(message);
  }
}
