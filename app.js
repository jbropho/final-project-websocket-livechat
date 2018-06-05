const express = require('express'),
  db = require('./db1'),
  app = express();

app.use(express.static('dist'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/dist');

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.get('/chatroom', function(req, res){
  res.render('chatroom', { name: req.query.username });
});

module.exports = app;
