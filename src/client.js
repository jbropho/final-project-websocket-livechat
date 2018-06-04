import openSocket from 'socket.io-client';
import { findWebsocketAddress } from './helpers.js';

var socket = openSocket(findWebsocketAddress());

function listenForMessages(cb) {
  socket.on('message', msg => cb(msg));
}

function subscribeToRoom(roomName, name) {
  socket.emit(roomName, name);
}

function sendMessage(msg) {
  socket.emit('message', msg);
}

function killSocket(name) {
  socket.emit('wantToDie', name);
};

export {
  sendMessage,
  listenForMessages,
  killSocket,
  subscribeToRoom,
  socket
};
