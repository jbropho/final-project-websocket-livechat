const mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
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

describe('logging in with valid username and password', function() {
  it('should allow login', function(done) {
    const hashedPassword = bcrypt.hashSync('Pass123');
    const user = { username: 'mille', password: hashedPassword };
    User.create(user);
    const returningUser = { username: 'mille', password: 'Pass123' };
    request.post(`${HOST}:${PORT}/auth/login`, { form: returningUser }, (err, res, body) => {
      if(err) console.log(err);
      body = JSON.parse(body);
      expect(res.statusCode).toEqual(200);
      expect(body["auth"]).toBe(true);
      expect(body["name"]).toEqual('mille');
    });
    done();
  });
});
