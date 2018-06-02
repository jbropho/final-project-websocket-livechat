const jwt = require('jsonwebtoken'),
      bcrypt = require('bcrypt-nodejs'),
      User = require('../models/user');

module.exports = {
  signup: (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password);
    User.create({ username: req.body.username, password: hashedPassword }, (err, user) => {
      if(err) {
        return res.status(500).send({auth: false, message: 'There was a problem registering the user'});
      }
  
      const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: 86400 });
    
      res.status(201).send({ auth: true, token: token, name: user.username });
    });
  }
}
