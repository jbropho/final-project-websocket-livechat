var chai = require('chai');
var expect = chai.expect;
this.loginInput = function(client) {
  client
    .url('http://localhost:8080/')
    .assert.visible('input[type=text]')
    .end()
};
this.headerVisible = function(client) {
  client
    .url('http://localhost:8080/')
    .setValue('input[type=text]', 'Jordan')
    .click('input[type=submit]')
    .pause(1000)
    .assert.visible('#chatroom-header')
    .end()
};
this.userHasWelcome = function(client) {
  client
    .url('http://localhost:8080/')
    .setValue('input[type=text]', 'Jordan')
    .click('input[type=submit]')
    .pause(1000)
    .assert.containsText('.chatroom-welcome', 'Welcome Jordan!')
    .end();
};
