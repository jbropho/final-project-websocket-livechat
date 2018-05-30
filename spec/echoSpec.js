const socket = require('socket.io-client');

var server;

beforeEach(done => {
  server = require('../server');
  done();
});

describe('socket connection', function() {
	it('socket server should echo a message sent from the client', done => {
    const client = socket.connect('http://localhost:8080');
    client.on('connect', _ => {
      client.on('echo', message => {
        expect(message).toEqual('Hello World');
        client.disconnect();
        done();
      });
      client.emit('echo', 'Hello World');
    });
  });
});
