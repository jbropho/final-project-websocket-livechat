
this.fieldForInput = function(client) {
  client
    .url('http://localhost:8080/')
    .saveScreenshot('/screenshots')
    .assert.visible('input[type=text]')
    .end();
};
this.userHasWelcome = function(client) {
  client
    .url('http://localhost:8080/')
    .setValue('input[type=text]', 'Jordan')
    .click('input[type=submit]')
    .pause(1000)
    .assert.containsText('Welcome Jordan!')
    .end();
};
