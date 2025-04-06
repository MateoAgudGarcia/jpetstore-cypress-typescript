import { BasePage } from './base.page';
import { RegisterPage } from './register.page';

interface LoginCredentials {
  username: string;
  password: string;
}

export class LoginPage extends BasePage {
  private get usernameInput() {
    return cy.get('input[name="username"]');
  }

  private get passwordInput() {
    return cy.get('input[name="password"]');
  }

  private get loginButton() {
    return cy.get('input[name="signon"]');
  }

  private get registerButton() {
    return cy.get('a[href*="newAccountForm"]');
  }

  /**
   * Fills in the login form with the provided credentials
   * @param credentials - The login credentials
   * @returns {this} - Returns the current page instance
   */
  public fillLoginForm(credentials: LoginCredentials): this {
    Cypress.log({
      name: 'Fill Login Form',
      message: `Filling login form for user: ${credentials.username}`,
      consoleProps: () => ({ credentials }),
    });

    this.usernameInput.type(credentials.username);
    this.passwordInput.type(credentials.password);
    return this;
  }

  /**
   * Clicks the login button to submit the form
   * @returns {this} - Returns the current page instance
   */
  public submitLogin(): this {
    Cypress.log({
      name: 'Submit Login',
      message: 'Clicking login button',
    });

    this.loginButton.click();
    return this;
  }

  /**
   * Performs the complete login process with provided credentials
   * @param credentials - The login credentials
   * @returns {this} - Returns the current page instance
   */
  public login(credentials: LoginCredentials): this {
    return this.fillLoginForm(credentials).submitLogin();
  }

  /**
   * Navigates to the registration page
   * @returns {RegisterPage} - Returns the RegisterPage instance
   */
  public goToRegister(): RegisterPage {
    Cypress.log({
      name: 'Go to Register',
      message: 'Navigating to registration page',
    });

    this.registerButton.click();
    return new RegisterPage();
  }
}
