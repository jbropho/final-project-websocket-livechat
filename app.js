

const express = require('express'),
  app = express();

app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.get('/chatroom', function(req, res){
  res.send('chat.html');
});

module.exports = app;
