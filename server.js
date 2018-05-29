const app = require('./app'),
  http = require('http').Server(app),
  port = 8080;

http.listen(port, console.log(`Listening on port ${port}`));

module.exports = http;
