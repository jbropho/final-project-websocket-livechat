import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

function listenForMessages(cb) {
  socket.on('message', msg => cb(msg));
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
  socket
};

