const app = require('./app'),
  http = require('http').Server(app),
  port = process.env.PORT || 8080,
  io = require('socket.io').listen(http);

io.sockets.on('connection', socket => {

  // socket.on('main', msg => {
  //   io.emit('main', msg);
  // });

  // socket.on('extra-room', msg => {
  //   io.emit('extra-room', msg);
  // });

  socket.on('joinRoom', roomName => {
    socket.join(roomName);

    socket.on(roomName, message => {
      io.to(roomName).emit(roomName, message);
    })
  });

  socket.on('wantToDie', name => {
    console.log(`${name} left`);
    socket.disconnect();
  });

  socket.on('clientJoin', name => {
    console.log(`${name} joined`);
  });
});

http.listen(port, console.log(`Listening on port ${port}`));
module.exports = http;
