const app = require('./app'),
  http = require('http').Server(app),
  port = process.env.PORT || 8080,
  Message = require('./models/message'),
  io = require('socket.io').listen(http);

io.sockets.on('connection', socket => {

  socket.on('joinRoom', roomName => {
    socket.join(roomName);

    socket.on(roomName, message => {
      io.to(roomName).emit(roomName, message);
      console.log('it is ', message);
      Message.create({ username: message.author, roomName: roomName, content: message.content }, err => console.log(err));
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
