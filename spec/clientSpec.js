var client = require('../src/client.js');

describe('Client', function() {
  var socket;
  var listenForMessages;
  var sendMessage;

  beforeEach(function() {
    socket = client.socket
    listenForMessages = client.listenForMessages;
    sendMessage = client.sendMessage;
  });

  describe('sendMessage', function() {
    it('calls socket.emit', function() {
      spyOn(socket, 'emit');
      sendMessage('hello world');
      expect(socket.emit).toHaveBeenCalled();
    });
  });

  describe('listenForMessages', function() {
    it('calls socket.on', function() {
      spyOn(socket, 'on');
      listenForMessages(function() { });
      expect(socket.on).toHaveBeenCalled();
    });
  });
});