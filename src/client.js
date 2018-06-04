import openSocket from 'socket.io-client';
import { findWebsocketAddress } from './helpers.js';

var socket = openSocket(findWebsocketAddress());

function listenForMessages(roomName, cb) {
  socket.on(roomName, msg => cb(msg));
}

function subscribeToRoom(roomName, name) {
  socket.emit(roomName, name);
}

function sendMessage(msg) {
  socket.emit('main', msg);
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
