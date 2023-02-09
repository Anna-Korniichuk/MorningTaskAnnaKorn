import { faker } from '@faker-js/faker';

function generateUser() {
  const random = Math.floor(Math.random() * 10);

  
  const firstpart = faker.name.firstName();
  const secondpart = faker.name.lastName();
  const username = `${firstpart}${secondpart}${random}`;
  const password = 'Pa$$word123'

  return {username, password};
}

module.exports = { generateUser };