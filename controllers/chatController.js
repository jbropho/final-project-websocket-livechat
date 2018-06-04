module.exports = {
  verify: (req, res) => res.status(200).send({ location: 'chat/enter' }),

  enter: (req, res) => res.render('chatroom')
}
