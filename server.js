const app = require('./app'),
  http = require('http').Server(app),
  port = process.env.PORT || 8080,
  bot = require('botbuilder'),
  io = require('socket.io').listen(http);


io.sockets.on('connection', socket => {
  socket.on('joinRoom', roomName => {
    socket.on(name => {
      socket.emit(roomName, name);
      `${name} joined the room`;
    });
    socket.join(roomName);

    socket.on(roomName, message => {
      io.to(roomName).emit(roomName, message);
    })
  });

  socket.on('wantToDie', name => {
    console.log(`${name} left`);
    socket.disconnect();
  });

  socket.on('joinRoom', name => {
    console.log(`${name} joined`);
  });
});

http.listen(port, console.log(`Listening on port ${port}`));
module.exports = http;
