import LoginElements from "./elements/LoginElements";

class LoginPage {
  visit() {
    cy.visit("/");
    return this;
  }

  fillLogin(username: string, password: string) {
    cy.get(LoginElements.usernameInput).type(username);
    cy.get(LoginElements.passwordInput).type(password);
    return this;
  }

  submit() {
    cy.get(LoginElements.loginButton).click();
    return this;
  }

  validateLoginSuccess() {
    cy.get(".title").should("have.text", "Products");
    return this;
  }

  validateErrorMessage(expectedMessage: string) {
    cy.get(LoginElements.errorMessage).should("have.text", expectedMessage);
    return this;
  }

  logout() {
    cy.get(LoginElements.menuButton).click();
    cy.get(LoginElements.logoutButton).click();
    return this;
  }
}

export default new LoginPage();
