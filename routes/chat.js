const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      chatController = require('../controllers/chatController'),
      verifyToken = require('../controllers/verifyToken');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/verify', verifyToken, chatController.verify);

router.get('/enter', chatController.enter);

module.exports = router; 

