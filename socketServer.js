const http = require('./httpServer').http,
  io = require('socket.io').listen(http),
  Message = require('./models/message')

  io.sockets.on('connection', socket => {

    socket.on('joinRoom', roomName => {
      socket.join(roomName);

      Message
      .find({roomName: roomName}, 'username content')
      .sort({created_at: -1})
      .limit(20)
      .exec(function(err, result) {
        var prevMessages = result.map(function(message) {
          return { content: message.content,
            author: message.username
                }
        })
        socket.emit(roomName, prevMessages);
      });

      socket.on(roomName, message => {
        io.to(roomName).emit(roomName, message);
        Message.create( {
          username: message.author,
          roomName: roomName,
          content: message.content
        }, err => console.log(err));
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
