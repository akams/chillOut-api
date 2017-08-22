var faker = require('faker/locale/fr');

var listEstablishment = function() {
    return new Promise((resolve, reject) => {
        const companies = [];
        const fakeImage = Object.keys(faker.image);
        for (var i = 0; i < 10; i++) {
            const img = fakeImage[Math.floor(Math.random() * fakeImage.length)];
            companies.push({
                id: i,
                name: faker.company.companyName(),
                description: faker.company.catchPhraseAdjective(),
                img: faker.image[img](640,480),
                adress: {
                    city: faker.address.city(),
                    streetName: faker.address.streetName(),
                    zipCode: faker.address.zipCode(),
                },
                price: faker.commerce.price()
            });
        }
        resolve(companies);
    });
};

module.exports = {
    listEstablishment: listEstablishment,
}