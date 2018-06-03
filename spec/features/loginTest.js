
this.helloWorld = function(client) {
  client
    .url('http://localhost:8080/')
    .assert.containsText('HELLO WORLD')
    .end();
};
