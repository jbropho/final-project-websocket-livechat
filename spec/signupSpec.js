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

describe('get signup', function () {
  it('should return 200 response code', function (done) {
    request.get(`${HOST}:${PORT}/auth/signup`, (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});

describe('signing up with username and password', function() {
  it('should have 201 status code', function(done) {
    const user = { form: { username: 'irbe', password: 'Pass123' } };
    request.post(`${HOST}:${PORT}/auth/signup`, user, (err, res) => {
      if(err) console.log('ERROR ', err);
      expect(res.statusCode).toEqual(201);
      done();
    });
  });

  it('should have auth value set to true', function(done) {
    const user = { form: { username: 'inge', password: 'Pass123' } };
    request.post(`${HOST}:${PORT}/auth/signup`, user, (err, res, body) => {
      body = JSON.parse(body);
      if(err) console.log(err);
      expect(body["auth"]).toBe(true);
      done();
    });
  });

  it('should have the name of the user', function(done) {
    const user = { form: { username: 'mirte', password: 'Pass123' } };
    request.post(`${HOST}:${PORT}/auth/signup`, user, (err, res, body) => {
    body = JSON.parse(body);
      if(err) console.log(err);
      expect(body["name"]).toEqual('mirte');
      done();
    });
  });
});

describe('signing up with repeating username', function() {
  it('should have 500 status code and false auth', function(done) {
    const user = { username: 'ilma', password: 'Pass123' };
    const form = { form: user };
    User.create(user);
    request.post(`${HOST}:${PORT}/auth/signup`, form, (err, res, body) => {
      if(err) console.log(err);
      expect(res.statusCode).toEqual(500); 
      done();
    });
  });
});
