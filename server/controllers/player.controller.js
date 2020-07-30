const { Player } = require('../models/player.model');

module.exports.index = (req, res) => {
  res.json({
    message: 'Hello Player'
  });
};
module.exports.createPlayer = (req, res) => {
  Player.create(req.body)
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err));
};

module.exports.getAll = (req, res) => {
  Player.find()
    .then(players => res.json(players))
    .catch(err => res.json(err));
};

module.exports.getOne = (req, res) => {
  Player.findById({ _id: req.params.id })
    .then(onePlayer => res.json(onePlayer))
    .catch(err => res.json(err));
};
module.exports.updatePlayer = (req, res) => {
  const { name, position } = req.body;
  Player.findByIdAndUpdate(
    req.params.id,
    {
      name,
      position
    },
    {
      new: true,
      runValidators: true
    }
  )
    .then(updatePlayer => res.json(updatePlayer))
    .catch(err => res.status(400).json(err));
};
module.exports.deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then(deleted => res.json(deleted))
    .catch(err => res.json(err));
};
