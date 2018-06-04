module.exports = {
  verify: (req, res) => res.status(200).send({ location: 'chatroom' }),

  enter: (req, res) => res.render('chatroom')
}
