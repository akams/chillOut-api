var faker = require('faker/locale/fr');

var getListEstablishment = function () {
  return new Promise((resolve, reject) => {
    const companies = [];
    const fakeImage = Object.keys(faker.image);
    for (var i = 0; i < 10; i++) {
      const img = fakeImage[Math.floor(Math.random() * fakeImage.length)];
      companies.push({
        id: i,
        name: faker.company.companyName(),
        description: faker.company.catchPhraseDescriptor(),
        img: faker.image[img](640, 480),
        adress: {
          city: faker.address.city(),
          streetName: faker.address.streetName(),
          zipCode: faker.address.zipCode(),
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude()
        },
        price: faker.commerce.price()
      });
    }
    resolve(companies);
  });
};

var getEstablishment = function (id) {
  return new Promise((resolve, reject) => {
    const fakeImage = Object.keys(faker.image);
    const img = fakeImage[Math.floor(Math.random() * fakeImage.length)];
    resolve({
      id: id,
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      img: faker.image[img](640, 480),
      adress: {
        city: faker.address.city(),
        streetName: faker.address.streetName(),
        zipCode: faker.address.zipCode(),
      },
      price: faker.commerce.price()
    });
  });
};

module.exports = {
  listEstablishment: getListEstablishment,
  getEstablishment: getEstablishment,
}