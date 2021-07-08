const routes = require("express").Router();
this.logger = require.main.require("../logger.js")("User");
let userController = require("../controllers/user_controller");
userController = new userController.UserController(this.logger);

routes.get("/", async (req, res) => {
  const response = await userController.getUser(req);
  res.send(response);
});

module.exports = routes;
