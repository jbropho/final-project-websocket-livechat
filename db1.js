const mongoose = require('mongoose'),
  config = require('config');

mongoose.connect(config.DBHost);
