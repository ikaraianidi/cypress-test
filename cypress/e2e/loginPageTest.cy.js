/// <reference types="cypress" />
import { loginPage } from "../pages/loginPage";
import { navigationMenu } from "../pages/components/navigationMenuComponent";

describe("Login page validation", () => {
  const navigateThroughMenu = new navigationMenu();
  const login = new loginPage();
  const authMenuItem = "Auth";
  const loginMenuItem = "Login";

  beforeEach(() => {
    cy.visit("/");
    navigateThroughMenu.openMenuItemByValue(authMenuItem);
    navigateThroughMenu.openMenuItemByValue(loginMenuItem);
  });

  it("Successfull login", () => {
    login.enterEmailValue("test@email.com");
    login.enterPasswordValue("test_password");
    login.clickRememberMeCheckbox();
    login.clickLogInButton();
    cy.get(".user-picture").should("exist");
  });

  it("Email field is required on the Login form", () => {
    const emailIsRequired = "Email is required!";
    login.elements.emailInput().click();
    cy.get(".title").click();
    login.checkErrorMessageVisibilityByText(emailIsRequired);
  });

  it("Email value should be real on the Login form", () => {
    const emailShouldBeReal = "Email should be the real one!";
    login.enterEmailValue("@email.com");
    cy.get(".title").click();
    login.checkErrorMessageVisibilityByText(emailShouldBeReal);
  });

  it("Password field is required on the Login form", () => {
    const passwordIsRequired = "Password is required!";
    login.elements.passwordInput().click();
    cy.get(".title").click();
    login.checkErrorMessageVisibilityByText(passwordIsRequired);
  });

  it("Password value should be between 4 and 50", () => {
    const passwordValidationMessage =
      "Password should contain from 4 to 50 characters";
    login.enterPasswordValue("123");
    cy.get(".title").click();
    login.checkErrorMessageVisibilityByText(passwordValidationMessage);
  });

  it("User is not able to enter password > 50 characters", () => {
    login.enterPasswordValue(
      "123RUSVqDJZNGDz3wrE4vBt9xb3aZSexpIaCsseQWDqVQssGPkN5cI"
    ); //enter string with > 50 characters;
    login.elements.passwordInput().should("have.length.of.at.most", 50);
  });

  it("Log In button is disabled on the Login form", () => {
    login.enterEmailValue("testemail.com");
    login.enterPasswordValue("tes");
    login.clickRememberMeCheckbox();
    login.elements.logInButton().should("be.disabled");
  });

  it("User is able to navigate to Forgot Password from Login form", () => {
    login.clickForgotPassword();
    cy.contains(".title", "Forgot Password");
  });

  it("Successfull Forgot Password request", () => {
    login.clickForgotPassword();
    login.enterEmailValue("test@email.com");
    cy.contains("button", "Request password").click();
    cy.get(".user-picture").should("exist");
  });

  it("Email field is required on the Forgot Password form", () => {
    const emailIsRequired = "Email is required!";
    login.clickForgotPassword();
    login.elements.emailInput().click();
    cy.get(".title").click();
    login.checkErrorMessageVisibilityByText(emailIsRequired);
  });

  it("Email value should be real on the Forgot Password form", () => {
    const emailShouldBeReal = "Email should be the real one!";
    login.clickForgotPassword();
    login.enterEmailValue("@email.com");
    cy.get(".title").click();
    login.checkErrorMessageVisibilityByText(emailShouldBeReal);
  });

  it("Clicking the 'Back to Log In' navigates to the Login page", () => {
    login.clickForgotPassword();
    cy.get(".text-link").contains("Back to Log In").click();
    cy.url().should("include", "/auth/login");
  });

  it("Clicking the 'Register' navigates to the Register page", () => {
    login.clickForgotPassword();
    cy.get(".text-link").contains("Register").click();
    cy.url().should("include", "/register");
  });
});
