const PlayerController = require('../controllers/player.controller');

module.exports = app => {
  app.get('/api', PlayerController.index);
  app.post('/api/players', PlayerController.createPlayer);
  app.get('/api/players', PlayerController.getAll);
  app.get('/api/players/:id', PlayerController.getOne);
  app.put('/api/players/:id', PlayerController.updatePlayer);
  app.delete('/api/players/:id', PlayerController.deletePlayer);
};
