import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

function listenForMessages(cb) {
  socket.on('message', msg => cb(null, msg));
}

function sendMessage(msg) {
  socket.emit('message', msg);
}

export { 
  sendMessage,
  listenForMessages,
  socket
};