var express = require('express');
var router = express.Router();

var GET_BACKEND = require('../controllerApi/controllerRequest');

/* GET LIST */
router.get('/', function (req, res) {
    console.log(req.params.id);
    res.jsonPromise(GET_BACKEND.requestGetBackEnd('http://localhost:8080/category/'));
});

/* GET ONE VALUE */
router.get('/:id', function (req, res) {
    console.log(req.params.id);
    res.jsonPromise(GET_BACKEND.requestGetBackEnd(`http://localhost:8080/category/${req.params.id}`));
});

module.exports = router;
