//@flow strict
import * as faker from "faker";

const address = () =>
  [
    faker.address.streetAddress(),
    faker.address.city(),
    `${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
  ].join(", ");

const card = () => ({
  name: faker.company.companyName(),
  url: faker.internet.url(),
  price: faker.commerce.price(),
  address: address(),
  addressUrl: faker.internet.url(),
  phone: faker.phone.phoneNumber(),
  imgUrl: encodeURI(`https://loremflickr.com/320/240/${faker.random.word()}`),
});

const generate = {
  address,
  card,
  phoneNumber: faker.phone.phoneNumber,
  url: faker.internet.url,
  words: faker.random.words,
};

export { generate };
