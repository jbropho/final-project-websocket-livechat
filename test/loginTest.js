const mongoose = require('mongoose'),
      auth = require('../routes/auth'),
      User = require('../models/user'),
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      should = chai.should(),
      bcrypt = require('bcrypt-nodejs');

let server;

chai.use(chaiHttp);

describe('login', _ => {

  before(done => {
    server = require('../httpServer').start(),
    done();
  });

  beforeEach(done => {
    User.remove({}, err => {
      done();
    });
  });

  after(done => {
    server.close();
    done();
  });
  
  describe('get login form', _ => {
    it('should render a login form', done => {
      chai.request(server)
      .get('/auth/login')
      .end((err, res) => {
        res.should.have.status(200);
      done();
      });
    })
  });

  describe('existing user logs in with correct password', _=>{
    it('should allow login', done => {
      const hashedPassword = bcrypt.hashSync('Pass123');
      const newUser = { username: 'milleV', password: hashedPassword };
      User.create(newUser);
      const user = { username: 'milleV', password: 'Pass123'};
      chai.request(server)
      .post('/auth/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.a.property('token');
        res.body.should.have.a.property('name').eql(user.username);
        res.body.should.have.a.property('auth').eql(true);  
      done();
      });
    });
  });
  
  describe('nonexistant username', _ => {
    it('should respond with status 404', done => {
      const user = { username: 'milleV', password: 'Pass123' };
      chai.request(server)
      .post('/auth/login')
      .send(user)
      .end((err, res) => {
         res.should.have.status(404);
         res.body.should.have.a.property('auth').eql(false);
         res.body.should.have.a.property('message').eql('No user found.');
       done();
       });
      });
    }); 
  
  describe('invalid password', _ => {
    it('should respond with a status 401', done => {
      const hashedPassword = bcrypt.hashSync('Pass123');
      const user = { username: 'milleV', password: hashedPassword };
      User.create(user);
      const userFake = { username: 'milleV', password: 'pass123' };
      chai.request(server)
      .post('/auth/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.have.a.property('auth').eql(false);
        res.body.should.have.a.property('message').eql('invalid password');
      done();
      });
    });
  });
});
