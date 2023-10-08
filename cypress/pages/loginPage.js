export class LoginPage {
  elements = {
    emailInput: () => cy.get("#input-email"),
    passwordInput: () => cy.get("#input-password"),
    rememberMeCheckbox: () => cy.get(".custom-checkbox"),
    logInButton: () => cy.contains("button", "Log In"),
    forgotPassword: () => cy.get(".forgot-password"),
    errorMessage: (message) => cy.get(".form-control-group").contains(message),
  };

  enterEmailValue(emailValue) {
    this.elements.emailInput().type(emailValue);
  }
  enterPasswordValue(passwordValue) {
    this.elements.passwordInput().type(passwordValue);
  }
  clickRememberMeCheckbox() {
    this.elements.rememberMeCheckbox().click();
  }
  clickLogInButton() {
    this.elements.logInButton().click();
  }
  clickForgotPassword() {
    this.elements.forgotPassword().click();
  }
  checkErrorMessageVisibilityByText(message) {
    this.elements.errorMessage(message);
  }
}
