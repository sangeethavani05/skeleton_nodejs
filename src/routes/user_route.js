const routes = require("express").Router();
const Controller = require("../controllers/user_controller");
const controller = new Controller();

routes.get("/", async (req, res) => {
  const response = await controller.getUser(req);
  res.send(response);
});

module.exports = routes;
