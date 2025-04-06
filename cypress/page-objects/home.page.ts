import { BasePage, PetCategories } from './base.page';
import { CatalogPage } from './catalog.page';

export class HomePage extends BasePage {
  private get sidebarElement() {
    return this.content.get('#SidebarContent');
  }

  private get searchContent() {
    return cy.get('div#SearchContent');
  }

  private get animalCategory() {
    return (category: PetCategories) =>
      this.sidebarElement.find(`a[href$="${category}"]`);
  }

  private get searchInput() {
    return this.searchContent.find('input[name="keyword"]');
  }

  private get searchButton() {
    return this.searchContent.find('[type="submit"]');
  }

  /**
   * Visits the home page
   * @returns {this} The current page instance for method chaining
   */
  public visit(): this {
    cy.visit('/');
    return this;
  }

  /**
   * Navigates to a specific pet category
   * @param category - The pet category to navigate to
   * @returns {this} The current page instance for method chaining
   */
  public goToCategory(category: PetCategories): CatalogPage {
    this.animalCategory(category).click();
    return new CatalogPage();
  }

  /**
   * Performs a search using the search input
   * @param searchTerm - The term to search for
   * @returns {this} The current page instance for method chaining
   */
  public search(searchTerm: string): CatalogPage {
    this.searchInput.type(searchTerm);
    this.searchButton.click();
    return new CatalogPage();
  }
}
