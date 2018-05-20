import * as faker from "faker";

const address = () =>
  [
    faker.address.streetAddress(),
    faker.address.city(),
    `${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
  ].join(", ");

const card = () => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  url: faker.internet.url(),
  price: faker.random.word(),
  address: address(),
  addressUrl: faker.internet.url(),
  phone: faker.phone.phoneNumber(),
  imgUrl: faker.image.imageUrl(),
});

const generate = {
  address,
  card,
  phoneNumber: faker.phone.phoneNumber,
  url: faker.internet.url,
  words: faker.random.words,
};

export { generate };
