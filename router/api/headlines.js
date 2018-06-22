var controller = require('../../controller/headline.js');
var express = require("express");

var router = express.Router();

router.post('/', controller.create);
router.get('/', controller.find);





module.exports = router;

