const userService = require("../services/user_service");

class UserController {
  constructor (logger) {
    this.logger = logger;
    this.userService = new userService.UserService(this.logger);
  }

  async getUser () {
    this.logger.info("I am from User Cobtroller");
    return { name: "Sangee" };
  }
}

exports.UserController = UserController;
