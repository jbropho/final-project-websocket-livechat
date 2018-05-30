describe('Client', function() {
  var client;
  var socket;
  var listenForMessages;
  var sendMessage;

  beforeEach(function() {
    client = require('../src/client.js');
    socket = client.socket;
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