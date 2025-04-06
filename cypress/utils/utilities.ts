import { CardType, PetCategories, UserRegistrationData } from '../page-objects';
import userData from '../fixtures/user-data.json';
import { faker } from '@faker-js/faker';

export function userInformation(category: PetCategories): UserRegistrationData {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
    username: faker.internet.username({ firstName, lastName }),
    firstName,
    lastName,
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 }),
    repeatedPassword: faker.internet.password({ length: 12 }),
    phone: faker.phone.number({ style: 'international' }),
    address1: userData.address1,
    address2: userData.address2,
    city: userData.city,
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    country: faker.location.country(),
    favouriteCategory: category,
    enableMyList: true,
    enableMyBanner: true,
  };
}

export function paymentInformation(cardType: CardType) {
  return {
    cardType,
    cardNumber: faker.finance.creditCardNumber(cardType.toLowerCase()),
    expiryDate: faker.date
      .future()
      .toLocaleDateString('en-US', { month: '2-digit', year: '2-digit' }),
  };
}
