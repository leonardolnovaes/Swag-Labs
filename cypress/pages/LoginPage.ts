import cypress from "cypress";

class LoginPage {
  private usernameInput = "[data-test=username]";
  private passwordInput = "[data-test=password]";
  private loginButton = "[data-test=login-button]";
  private errorMessage = "[data-test=error]";
  private menuButton = ".bm-burger-button";
  private logoutButton = "#logout_sidebar_link";

  visit() {
    cy.visit("/");
    return this;
  }

  fillLogin(username: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
    return this;
  }

  submit() {
    cy.get(this.loginButton).click();
    return this;
  }

  validateLoginSuccess() {
    cy.get(".title").should("have.text", "Products");
    return this;
  }

  validateErrorMessage(expectedMessage: string) {
    cy.get(this.errorMessage).should("have.text", expectedMessage);
    return this;
  }

  logout() {
    cy.get(this.menuButton).click();
    cy.get(this.logoutButton).click();
    return this;
  }
}

export default new LoginPage();
