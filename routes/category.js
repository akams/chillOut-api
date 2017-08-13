var express = require('express');
var router = express.Router();
var request = require('request');

/* GET LIST ESTABLISHMENT */
router.get('/', function (req, res, next) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.jsonPromise(MOCK_ESTABISHMENT.listEstablishment());

    console.log(req.params.id);
    request.get('http://localhost:8080/category/')
        .on('response', function(response) {
            console.log(response.statusCode);
            response.on('data', function (data) {
                console.log(JSON.parse(data));
            });
        });
});

/* GET LIST ESTABLISHMENT */
router.get('/:id', function (req, res) {
    console.log(req.params.id);
    request.get('http://localhost:8080/category/' + req.params.id)
        .on('response', function(response) {
            console.log(response.statusCode);
            response.on('data', function (data) {
                console.log(JSON.parse(data));
            });
        });
});

module.exports = router;
