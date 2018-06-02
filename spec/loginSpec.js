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

describe('get login', function() {
  it('should return 200 status code', function (done) {
    request.get(`${HOST}:${PORT}/auth/login`, (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});
