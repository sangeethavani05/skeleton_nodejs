const routes = require('express').Router();
let controller = require('../controllers/user_controller');
controller = new controller()

routes.get('/', async (req, res) => {
  let response = await controller.getUser(req)
  res.send(response)
});

module.exports = routes;