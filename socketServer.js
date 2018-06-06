const http = require('./httpServer').http,
  io = require('socket.io').listen(http);

  io.sockets.on('connection', socket => {

    socket.on('joinRoom', roomName => {
      socket.join(roomName);
    
      socket.on(roomName, msg => {
        io.to(roomName).emit(roomName, msg);
      });
    });

    socket.on('wantToDie', name => {
      console.log(`${name} left`);
      socket.disconnect();
    });

    socket.on('clientJoin', name => {
      console.log(`${name} joined`);
    });
  });
