import openSocket from 'socket.io-client';
var socket;
if (process.env.NODE_ENV === 'production')
{
  socket = openSocket('ws://finalprojectwebsocketlivechat.herokuapp.com/');
}
else {
  socket = openSocket('http://localhost:8080');
}
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
