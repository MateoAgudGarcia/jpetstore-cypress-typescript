import { PetCategories } from '../page-objects/base.page';
import { HomePage } from '../page-objects/home.page';
import { LoginPage } from '../page-objects/login.page';
import { faker } from '@faker-js/faker';

describe('Add a pet', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    homePage.visit().goToCatalog().goToSignIn();
    loginPage.goToRegister().register({
      username: faker.internet.username(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 12 }),
      repeatedPassword: faker.internet.password({ length: 12 }),
      phone: faker.phone.number({ style: 'international' }),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      country: faker.location.country(),
      favouriteCategory: PetCategories.DOGS,
      enableMyList: true,
      enableMyBanner: true,
    });
  });

  it('should add a pet to the cart', () => {
    const catalogPage = homePage.goToCategory(PetCategories.DOGS);
    catalogPage.chooseProductByIndex(0).addToCartByIndex(0).proceedToCheckout();
  });
});
