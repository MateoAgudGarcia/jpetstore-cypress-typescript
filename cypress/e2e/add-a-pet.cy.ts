import { PetCategories } from '../page-objects/base.page';
import { HomePage } from '../page-objects/home.page';
import { LoginPage } from '../page-objects/login.page';
import { CardType } from '../page-objects/payment.page';
import { paymentInformation, userInformation } from '../utils/utilities';

describe('Add a pet', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  let username: string;
  let password: string;

  before(() => {
    homePage.visit().goToCatalog().goToSignIn();
    const credentials = loginPage
      .goToRegister()
      .register(userInformation(PetCategories.DOGS));
    username = credentials.username;
    password = credentials.password;
  });

  beforeEach(() => {
    homePage.visit().goToCatalog().goToSignIn();
    loginPage.login({ username, password });
  });

  afterEach(() => {
    homePage.signOut();
  });

  it('should add a pet to the cart', () => {
    const catalogPage = homePage.goToCategory(PetCategories.BIRDS);
    catalogPage.chooseProductByIndex(0).addToCartByIndex(0);
  });
  it('should search for a dog and buy it', () => {
    const cardType = CardType.AmericanExpress;
    const catalogPage = homePage.search('Poodle');
    catalogPage
      .chooseProductByIndex(0)
      .addToCartByIndex(0)
      .proceedToCheckout()
      .fillPaymentForm(paymentInformation(cardType))
      .confirmOrder();
  });

  it('should buy a cat', () => {
    const cardType = CardType.Visa;
    const catalogPage = homePage.goToCategory(PetCategories.CATS);
    catalogPage
      .chooseProductByIndex(0)
      .addToCartByIndex(0)
      .proceedToCheckout()
      .fillPaymentForm(paymentInformation(cardType))
      .confirmOrder();
  });
});
