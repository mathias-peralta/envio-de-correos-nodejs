const express = require('express');
const controller = require('../controller/indexController');
const router = express.Router()

router.get('/', controller.list);

router.post('/sendMail', controller.sendMail);

module.exports = router;