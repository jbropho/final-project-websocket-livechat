const app = require('./app'),
  http = require('http').Server(app),
  port = 8080;

var newServer;

module.exports = {
  http: http,
  start: _ => {if (!newServer) { newServer = http.listen(port, console.log(`Listening on port ${port}`))}},
  stop: _ => { if(newServer) newServer.close(); console.log('CLOSING') }
}

exports.start = function(readyCallback) {
  if(!this.server) {
    this.server = http.listen(port, function() {
      console.log(`Server running on port ${port}`, port);
      if(readyCallback) { readyCallback() }
    });
  }
};

exports.close = function() {
  this.server.close();
}

exports.http = http;
