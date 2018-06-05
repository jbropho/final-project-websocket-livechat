const mongoose = require('mongoose'),
  request = require('request'),
  auth = require('../routes/auth'),
  User = require('../models/user'),
  server = require('../server'),
  HOST = 'http://localhost',
  PORT = '8080',
  path = `${HOST}:${PORT}/auth/signup`,
  user = { username: 'someUser', password: 'Pass123' };

beforeEach(done => {
  User.remove({}, err => {
  done();
  });
});

describe('get signup', function () {
  it('should return 200 response code', function (done) {
    request.get(path, (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});

describe('signing up with valid username and password', function() {
  it('should have 201 status code', function(done) {
    request.post(path, { form: user }, (err, res) => {
      if(err) console.log('ERROR ', err);
      expect(res.statusCode).toEqual(201);
      done();
    });
  });

  it('should have auth value set to true', function(done) {
    request.post(path, { form: user }, (err, res, body) => {
      body = JSON.parse(body);
      if(err) console.log(err);
      expect(body["auth"]).toBe(true);
      done();
    });
  });

  it('should have the name of the user', function(done) {
    request.post(path, { form: user }, (err, res, body) => {
    body = JSON.parse(body);
      if(err) console.log(err);
      expect(body["name"]).toEqual(user.username);
      done();
    });
  });
});

describe('attempting to signup with a taken username', function() {
  it('should have 500 status code and false auth', function(done) {
    User.create(user);
    request.post(path, { form: user }, (err, res, body) => {
      if(err) console.log(err);
      expect(res.statusCode).toEqual(500); 
      done();
    });
  });
});
