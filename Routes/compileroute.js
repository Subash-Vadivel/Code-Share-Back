const express = require('express');
const languagecontroller = require('../controllers/languagecontroller');
const router = express.Router();

router.route('/').post(languagecontroller.controllan);

module.exports = router;