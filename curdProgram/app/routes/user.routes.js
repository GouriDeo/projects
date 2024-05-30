var express = require('express')
const router = express.Router();
var userController = require('../controller/user.controller')
var expressValidator = require('express-validator')
router.use(expressValidator())

router.post('/',userController.user_create);
router.post('/age',userController.user_agecheck);

module.exports = router