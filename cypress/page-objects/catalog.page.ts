import { BasePage, PaymentPage } from '.';

export class CatalogPage extends BasePage {
  private get catalogContent() {
    return this.content.get('#Catalog');
  }

  private get productList() {
    return this.catalogContent.find('table');
  }

  private get productIdByIndex() {
    return (index: number) =>
      this.productList
        .find('td:nth-of-type(1) a[href*="action?viewProduct"]')
        .eq(index);
  }

  private get addToCartButtonByIndex() {
    return (index: number) =>
      this.productList.find('td a[href*="action?addItemToCart"]').eq(index);
  }

  private get checkoutButton() {
    return this.catalogContent.find('a.Button').contains('Proceed to Checkout');
  }

  /**
   * Selects a product by its index in the product list
   * @param index - The index of the product to select
   * @returns {this}
   */
  public chooseProductByIndex(index: number): this {
    this.productIdByIndex(index).click();
    return this;
  }

  /**
   * Adds a product to the cart by its index in the product list
   * @param index - The index of the product to add to the cart
   * @returns {this}
   */
  public addToCartByIndex(index: number): this {
    this.addToCartButtonByIndex(index).click();
    return this;
  }

  /**
   * Proceeds to the checkout page
   * @returns {this}
   */
  public proceedToCheckout(): PaymentPage {
    this.checkoutButton.click();
    return new PaymentPage();
  }
}
