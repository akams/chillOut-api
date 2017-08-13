var express = require('express');
var router = express.Router();

const MOCK_ESTABISHMENT = require('../mock-api/mock-establishment');

/* GET LIST ESTABLISHMENT */
router.get('/', function (req, res, next) {
    res.jsonPromise(MOCK_ESTABISHMENT.listEstablishment());
});

module.exports = router;