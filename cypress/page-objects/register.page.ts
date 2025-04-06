import { BasePage, PetCategories } from './base.page';

enum LanguagePreference {
  English = 'english',
  Japanese = 'japanese',
}

interface UserRegistrationData {
  username: string;
  password: string;
  repeatedPassword: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  languagePreference?: LanguagePreference;
  favouriteCategory: PetCategories;
  enableMyList?: boolean;
  enableMyBanner?: boolean;
}

export class RegisterPage extends BasePage {
  private get usernameInput() {
    return cy.get('input[name="username"]');
  }

  private get passwordInput() {
    return cy.get('input[name="password"]');
  }

  private get repeatedPasswordInput() {
    return cy.get('input[name="repeatedPassword"]');
  }

  private get firstNameInput() {
    return cy.get('input[name="account.firstName"]');
  }

  private get lastNameInput() {
    return cy.get('input[name="account.lastName"]');
  }

  private get emailInput() {
    return cy.get('input[name="account.email"]');
  }

  private get phoneInput() {
    return cy.get('input[name="account.phone"]');
  }

  private get address1Input() {
    return cy.get('input[name="account.address1"]');
  }

  private get address2Input() {
    return cy.get('input[name="account.address2"]');
  }

  private get cityInput() {
    return cy.get('input[name="account.city"]');
  }

  private get stateInput() {
    return cy.get('input[name="account.state"]');
  }

  private get zipInput() {
    return cy.get('input[name="account.zip"]');
  }

  private get countryInput() {
    return cy.get('input[name="account.country"]');
  }

  private get languagePreferenceSelect() {
    return cy.get('select[name="account.languagePreference"]');
  }

  private get favouriteCategorySelect() {
    return cy.get('select[name="account.favouriteCategoryId"]');
  }

  private get myListCheckbox() {
    return cy.get('input[name="account.listOption"]');
  }

  private get myBannerCheckbox() {
    return cy.get('input[name="account.bannerOption"]');
  }

  private get saveButton() {
    return cy.get('input[name="newAccount"]');
  }

  /**
   * Fills in the registration form with the provided user data
   * @param userData - The user registration data
   * @returns {this} - Returns the current page instance
   */
  public fillRegistrationForm(userData: UserRegistrationData): this {
    Cypress.log({
      name: 'Fill Registration Form',
      message: `Filling registration form for user: ${userData.username}`,
      consoleProps: () => ({ userData }),
    });

    this.usernameInput.type(userData.username);
    this.passwordInput.type(userData.password);
    this.repeatedPasswordInput.type(userData.password);
    this.firstNameInput.type(userData.firstName);
    this.lastNameInput.type(userData.lastName);
    this.emailInput.type(userData.email);
    this.phoneInput.type(userData.phone);
    this.address1Input.type(userData.address1);
    if (userData.address2) {
      this.address2Input.type(userData.address2);
    }
    this.cityInput.type(userData.city);
    this.stateInput.type(userData.state);
    this.zipInput.type(userData.zip);
    this.countryInput.type(userData.country);
    if (userData.languagePreference) {
      this.languagePreferenceSelect.select(userData.languagePreference);
    }
    if (userData.favouriteCategory) {
      this.favouriteCategorySelect.select(userData.favouriteCategory);
    }
    if (userData.enableMyList) {
      this.myListCheckbox.check();
    }
    if (userData.enableMyBanner) {
      this.myBannerCheckbox.check();
    }

    return this;
  }

  /**
   * Submits the registration form
   * @returns {this} - Returns the current page instance
   */
  public submitRegistration(): this {
    Cypress.log({
      name: 'Submit Registration',
      message: 'Submitting registration form',
    });

    this.saveButton.click();
    return this;
  }

  /**
   * Complete registration process with provided user data
   * @param userData - The user registration data
   * @returns {this} - Returns the current page instance
   */
  public register(userData: UserRegistrationData): this {
    return this.fillRegistrationForm(userData).submitRegistration();
  }
}
