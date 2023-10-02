/// <reference types="cypress" />
import { registerPage } from "../pages/registerPage";
import { navigationMenu } from "../pages/components/navigationMenuComponent";

describe("Register page validation", () => {
  const navigateThroughMenu = new navigationMenu();
  const register = new registerPage();
  const authMenuItem = "Auth";
  const registerMenuItem = "Register";

  beforeEach(() => {
    cy.visit("/");
    navigateThroughMenu.openMenuItemByValue(authMenuItem);
    navigateThroughMenu.openMenuItemByValue(registerMenuItem);
  });

  it("Successfull register", () => {
    register.enterFullNameValue("Test User");
    register.enterEmailValue("test@email.com");
    register.enterPasswordValue("test_password");
    register.enterRepeatPasswordValue("test_password");
    register.clickAgreeToTermsCheckbox();
    register.clickRegisterInButton();
    cy.get(".user-picture").should("exist");
  });

  it("Email field is required on the Register form", () => {
    const emailIsRequired = "Email is required!";
    register.elements.emailInput().click();
    cy.get(".title").click();
    register.checkErrorMessageVisibilityByText(emailIsRequired);
  });

  it("Email value should be real on the Register form", () => {
    const emailShouldBeReal = "Email should be the real one!";
    register.enterEmailValue("@email.com");
    cy.get(".title").click();
    register.checkErrorMessageVisibilityByText(emailShouldBeReal);
  });

  it("Password field is required on the Register form", () => {
    const passwordIsRequired = "Password is required!";
    register.elements.passwordInput().click();
    cy.get(".title").click();
    register.checkErrorMessageVisibilityByText(passwordIsRequired);
  });

  it("Password value should be between 4 and 50", () => {
    const passwordValidationMessage =
      "Password should contain from 4 to 50 characters";
    register.enterPasswordValue("123");
    cy.get(".title").click();
    register.checkErrorMessageVisibilityByText(passwordValidationMessage);
  });

  it("Password confirmation is required!", () => {
    const repeatPasswordValidationMessage =
      "Password confirmation is required!";
    register.elements.repeatPasswordInput().click();
    cy.get(".title").click();
    register.checkErrorMessageVisibilityByText(repeatPasswordValidationMessage);
  });

  it("Password and repeat password should be the same", () => {
    register.enterPasswordValue("test_password");
    register.enterRepeatPasswordValue("test");
    cy.get("#input-re-password").should("have.class", "status-danger");
  });

  it("Register button is disabled without argeement", () => {
    register.enterFullNameValue("Test User");
    register.enterEmailValue("test@email.com");
    register.enterPasswordValue("test_password");
    register.enterRepeatPasswordValue("test_password");
    register.elements.registerButton().should("be.disabled");
  });
});
