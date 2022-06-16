// Setting the alreay running server & routing the request to the controller
const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

module.exports = router;