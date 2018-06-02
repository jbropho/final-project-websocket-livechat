const mongoose = require('mongoose'),
  request = require('request'),
  auth = require('../routes/auth'),
  User = require('../models/user'),
  server = require('../server'),
  HOST = 'http://localhost',
  PORT = '8080';

beforeEach(done => {
  User.remove({}, err => {
  done();
  });
});
