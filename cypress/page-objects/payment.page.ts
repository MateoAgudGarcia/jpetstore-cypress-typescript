import { BasePage } from './base.page';

export enum CardType {
  Visa = 'Visa',
  MasterCard = 'MasterCard',
  AmericanExpress = 'American Express',
}

interface PaymentDetails {
  cardType: CardType;
  cardNumber: string;
  expiryDate: string;
}

export class PaymentPage extends BasePage {
  private get cardTypeSelect() {
    return this.content.get('select[name="order.cardType"]');
  }

  private get cardNumberInput() {
    return this.content.get('input[name="order.creditCard"]');
  }

  private get expiryDateInput() {
    return this.content.get('input[name="order.expiryDate"]');
  }

  private get newOrderButton() {
    return this.content.get('input[name="newOrder"]');
  }

  private get confirmButton() {
    return this.content.get('a.Button').contains('Confirm');
  }

  private get confirmationMessage() {
    return this.content.get('ul.messages > li');
  }

  /**
   * Fills in the payment form with the provided payment details
   * @param paymentDetails - The payment card details
   * @returns {this} - Returns the current page instance
   */
  public fillPaymentForm(paymentDetails: PaymentDetails): this {
    this.cardTypeSelect.select(paymentDetails.cardType);
    this.cardNumberInput.clear().type(paymentDetails.cardNumber);
    this.expiryDateInput.clear().type(paymentDetails.expiryDate);

    this.newOrderButton.click();
    return this;
  }

  /**
   * Selects a specific card type
   * @param cardType - The type of card to select
   * @returns {this} - Returns the current page instance
   */
  public selectCardType(cardType: CardType): this {
    this.cardTypeSelect.select(cardType);
    return this;
  }

  /**
   * Enters the card number
   * @param cardNumber - The card number to enter
   * @returns {this} - Returns the current page instance
   */
  public enterCardNumber(cardNumber: string): this {
    this.cardNumberInput.type(cardNumber);
    return this;
  }

  /**
   * Enters the expiry date
   * @param expiryDate - The expiry date to enter
   * @returns {this} - Returns the current page instance
   */
  public enterExpiryDate(expiryDate: string): this {
    this.expiryDateInput.type(expiryDate);
    return this;
  }

  /**
   * Confirms the order by clicking the confirm button and verifies the confirmation message
   * @returns {this} - Returns the current page instance
   */
  public confirmOrder(): this {
    this.confirmButton.click();
    this.confirmationMessage.should(
      'have.text',
      'Thank you, your order has been submitted.',
    );
    return this;
  }
}
