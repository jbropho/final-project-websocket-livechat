const app = require('./app'),
  http = require('http').Server(app),
  port = 8080;

var newServer;

module.exports = {
  http: http,
  start: _ => {if (!newServer) { newServer = http.listen(port, console.log(`Listening on port ${port}`))}; return newServer},
  stop: _ => { if(newServer) newServer.close(); console.log('CLOSING') }
}

