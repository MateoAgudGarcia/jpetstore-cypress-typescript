export enum PetCategories {
  FISH = 'FISH',
  DOGS = 'DOGS',
  CATS = 'CATS',
  REPTILES = 'REPTILES',
  BIRDS = 'BIRDS',
}

export class BasePage {
  private get logoElement() {
    return cy.get('#Logo');
  }

  private get menuElement() {
    return cy.get('#MenuContent');
  }

  private get logo() {
    return this.logoElement.find('a');
  }

  private get signInLink() {
    return this.menuElement.find('a[href*="signonForm"]');
  }

  private get signOffButton() {
    return cy.get('[href*="action?signoff"]');
  }

  private get cartLink() {
    return this.menuElement.find('a[href*="viewCart"]');
  }

  private get actionCatalogButton() {
    return cy.get('a[href="actions/Catalog.action"]');
  }

  get content() {
    return cy.get('#Content');
  }

  /**
   * Clicks on the main logo of the page
   * @returns {this} The current page instance for method chaining
   */
  public clickLogo(): this {
    this.logo.click();
    return this;
  }

  /**
   * Navigates to the sign in page by clicking the sign in link
   * @returns {this} The current page instance for method chaining
   */
  public goToSignIn(): this {
    this.signInLink.should('be.visible').click();
    return this;
  }

  /**
   * Signs off the current user by clicking the sign off button
   * @returns {this} The current page instance for method chaining
   */
  public signOut(): this {
    this.signOffButton.should('be.visible').click();
    this.signInLink.should('be.visible');
    return this;
  }

  /**
   * Navigates to the shopping cart page
   * @returns {this} The current page instance for method chaining
   */
  public goToCart(): this {
    this.cartLink.click();
    return this;
  }

  /**
   * Click to go to HomePage
   * @returns {this}
   */
  public goToCatalog(): this {
    this.actionCatalogButton.should('be.visible').click();
    return this;
  }
}
