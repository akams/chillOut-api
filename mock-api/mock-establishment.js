var faker = require('faker');

var listEstablishment = function() {
    return new Promise((resolve, reject) => {
        const companies = [];
        for (var i = 0; i < 10; i++) {
            companies.push({
                id: i,
                name: faker.company.companyName(),
                description: faker.company.catchPhraseAdjective(),
                img: faker.image.imageUrl(),
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