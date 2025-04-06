import { BasePage } from './base.page';

export type CardType = 'Visa' | 'MasterCard' | 'American Express';

interface PaymentDetails {
  cardType: CardType;
  cardNumber: string;
  expiryDate: string;
}

export class PaymentPage extends BasePage {
  private get cardTypeSelect() {
    return cy.get('select[name="order.cardType"]');
  }

  private get cardNumberInput() {
    return cy.get('input[name="order.creditCard"]');
  }

  private get expiryDateInput() {
    return cy.get('input[name="order.expiryDate"]');
  }

  /**
   * Fills in the payment form with the provided payment details
   * @param paymentDetails - The payment card details
   * @returns {this} - Returns the current page instance
   */
  public fillPaymentForm(paymentDetails: PaymentDetails): this {
    Cypress.log({
      name: 'Fill Payment Form',
      message: `Filling payment form with card type: ${paymentDetails.cardType}`,
      consoleProps: () => ({ paymentDetails }),
    });

    this.cardTypeSelect.select(paymentDetails.cardType);
    this.cardNumberInput.type(paymentDetails.cardNumber);
    this.expiryDateInput.type(paymentDetails.expiryDate);

    return this;
  }

  /**
   * Selects a specific card type
   * @param cardType - The type of card to select
   * @returns {this} - Returns the current page instance
   */
  public selectCardType(cardType: CardType): this {
    Cypress.log({
      name: 'Select Card Type',
      message: `Selecting card type: ${cardType}`,
    });

    this.cardTypeSelect.select(cardType);
    return this;
  }

  /**
   * Enters the card number
   * @param cardNumber - The card number to enter
   * @returns {this} - Returns the current page instance
   */
  public enterCardNumber(cardNumber: string): this {
    Cypress.log({
      name: 'Enter Card Number',
      message: 'Entering card number',
      consoleProps: () => ({ cardNumber }),
    });

    this.cardNumberInput.type(cardNumber);
    return this;
  }

  /**
   * Enters the expiry date
   * @param expiryDate - The expiry date to enter
   * @returns {this} - Returns the current page instance
   */
  public enterExpiryDate(expiryDate: string): this {
    Cypress.log({
      name: 'Enter Expiry Date',
      message: `Entering expiry date: ${expiryDate}`,
    });

    this.expiryDateInput.type(expiryDate);
    return this;
  }
}
