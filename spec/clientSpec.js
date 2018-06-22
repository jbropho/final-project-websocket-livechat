import { WebSocket, Server, SocketIO } from 'mock-socket';
const chatSocket = new Server('http://localhost:8080');

describe('Client', function() {
  var client = require('../src/client.js'),
    socket = client.socket,
    listenForMessages = client.listenForMessages,
    sendMessage = client.sendMessage,
    killSocket = client.killSocket,
    subscribeToRoom = client.subscribeToRoom;

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

  describe('subscribeToRoom', function() {
    it('socket emits welcome', function() {
      spyOn(socket, 'emit');
      subscribeToRoom('clientJoin');
      expect(socket.emit).toHaveBeenCalled();
    })
  });

  describe('killSocket', function() {
    it('socket emits wantToDie', function() {
      spyOn(socket, 'emit');
      killSocket();
      expect(socket.emit).toHaveBeenCalled();
    });
  });
});
