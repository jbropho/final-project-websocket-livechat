const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'test') {
  mongoose.connect(process.env.db_url_test);
} else {
  mongoose.connect(process.env.db_url);
}
