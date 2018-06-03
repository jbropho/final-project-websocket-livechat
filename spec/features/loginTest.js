
this.helloWorld = function(client) {
  client
    .url('http://localhost:8080/')
    .saveScreenshot('./screenshots')
    .assert.containsText('HELLO WORLD')
    .end();
};
