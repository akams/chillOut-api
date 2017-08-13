var request = require('request');

const requestGetBackEnd = function (url) {
  return new Promise((resolve, reject) => {
    request.get(url)
      .on('response', function (response) {
        response.on('data', function (data) {
          console.log(JSON.parse(data));
          resolve(JSON.parse(data));
        });
      })
      .on('error', function (err) {
        console.error(err);
        reject(err)
      });
  });
}

module.exports = {
  requestGetBackEnd: requestGetBackEnd,
}