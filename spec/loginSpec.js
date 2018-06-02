const mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  request = require('request'),
  auth = require('../routes/auth'),
  User = require('../models/user'),
  server = require('../server'),
  HOST = 'http://localhost',
  PORT = '8080';
var user = { username: 'someUser', password: 'Pass123' },
  fakeUser = { username: 'someUser', password: 'fakePass' },
  encryptedUser = { username: user.username, password: bcrypt.hashSync(user.password) },
  path = `${HOST}:${PORT}/auth/login`;

beforeAll(done => {
  User.remove({}, err => {
  done();
  });
  User.create(encryptedUser);
});

describe('get login', function() {
  it('should return 200 status code', function (done) {
    request.get(path, (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});

describe('logging in with valid username and password', function() {
  it('should allow login', function(done) {
    request.post(path, { form: user }, (err, res, body) => {
      if(err) console.log(err);
      body = JSON.parse(body);
      expect(res.statusCode).toEqual(200);
      expect(body["auth"]).toBe(true);
      expect(body["name"]).toEqual(user.username);
    });
    done();
  });
});

describe('logging in with invalid password', function() {
  it('should refuse login', function(done) {
    request.post(path, { form: fakeUser }, (err, res, body) => {
      if(err) console.log(err);
      body = JSON.parse(body);
      expect(res.statusCode).toEqual(401);
      expect(body["auth"]).toBe(false);
    });
    done();
  });
});
