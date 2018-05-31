const express = require('express'),
  app = express();

app.use(express.static('dist'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.get('/chatroom', function(req, res){
  res.render('chatroom', { name: req.query.username });
});

module.exports = app;
