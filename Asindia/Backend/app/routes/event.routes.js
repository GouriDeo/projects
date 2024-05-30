var express = require('express')
const router = express.Router();
expressValidator = require('express-validator')
var eventController =require('../controller/event.controller')
router.use(expressValidator())

router.post('/:id',eventController.eventCreate);
router.get('/:id',eventController.findEvents);

module.exports = router