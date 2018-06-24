import openSocket from 'socket.io-client';
import { findWebsocketAddress } from './helpers.js';

var socket = openSocket(findWebsocketAddress());

function listenForMessages(roomName, cb) {
  socket.on(roomName, msg => cb(msg, roomName));
}

function subscribeToRoom(roomName, name) {
  socket.emit('joinRoom', roomName, name);
  // sendMessage(roomName, {content:`${name} has joined ${roomName}`});
}

function sendMessage(roomName, msg) {
  socket.emit(roomName, msg);
}

function killSocket(name) {
  socket.emit('wantToDie', name);
}

export {
  sendMessage,
  listenForMessages,
  killSocket,
  subscribeToRoom,
  socket
};
