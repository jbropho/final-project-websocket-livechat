const app = require('./app'),
  http = require('http').Server(app),
  port = 8080,
  io = require('socket.io').listen(http);

io.sockets.on('connection', socket => {
  socket.on('message', msg => {
    io.emit('message', msg);
  });
});


http.listen(port, console.log(`Listening on port ${port}`));

module.exports = http;
