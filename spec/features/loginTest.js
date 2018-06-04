
this.fieldForInput = function(client) {
  client
    .url('http://localhost:8080/')
    .saveScreenshot('/screenshots')
    .assert.visible('input[type=text]')
    .end();
};
