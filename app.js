const express = require('express'),
  app = express(),
  db = require('./db'),
  chat = require('./routes/chat'),
  auth = require('./routes/auth');

app.use(express.static('dist'));
app.set('view engine', 'pug');

app.use('/auth', auth);
app.use('/chat', chat);

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.get('/chatroom', function(req, res){
  res.render('chatroom', { name: req.query.username });
});

module.exports = app;
