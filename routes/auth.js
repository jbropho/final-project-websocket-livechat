const express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  authController = require('../controllers/auth');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/signup', (req, res) => res.status(200).render('signup'));
router.post('/signup', authController.signup);


module.exports = router;
  
