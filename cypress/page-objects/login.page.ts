import { BasePage, RegisterPage } from '.';

export interface LoginCredentials {
  username: string;
  password: string;
}

export class LoginPage extends BasePage {
  private get usernameInput() {
    return this.content.get('input[name="username"]');
  }

  private get passwordInput() {
    return this.content.get('input[name="password"]');
  }

  private get loginButton() {
    return this.content.get('input[name="signon"]');
  }

  private get registerButton() {
    return this.content.get('a[href*="newAccountForm"]');
  }

  /**
   * Fills in the login form with the provided credentials
   * @param credentials - The login credentials
   * @returns {this} - Returns the current page instance
   */
  public fillLoginForm(credentials: LoginCredentials): this {
    this.usernameInput.clear().type(credentials.username);
    this.passwordInput.clear().type(credentials.password);
    return this;
  }

  /**
   * Clicks the login button to submit the form
   * @returns {this} - Returns the current page instance
   */
  public submitLogin(): this {
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
    this.registerButton.click();
    return new RegisterPage();
  }
}
