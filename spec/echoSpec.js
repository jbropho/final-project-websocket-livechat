const socket = require('socket.io-client');

let server;

beforeEach(done => {
  server = require('../appStarter');
  done();
});

describe('socket connection', function() {
	it('socket server should echo a message sent from the client', done => {
    const client = socket.connect('http://localhost:8080');
    client.on('connect', _ => {
      client.on('message', message => {
        expect(message).toEqual('Hello World');
        client.disconnect();
      });
      client.emit('message', 'Hello World');
      done();
    });
  });
});
