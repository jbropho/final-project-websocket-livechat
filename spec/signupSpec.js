const mongoose = require('mongoose'),
  request = require('request'),
  auth = require('../routes/auth'),
  User = require('../models/user'),
  server = require('../server'),
  HOST = 'http://localhost',
  PORT = '8080';

describe('get signup', function () {
  it('should return 200 response code', function (done) {
    request.get(`${HOST}:${PORT}/auth/signup`, (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});
