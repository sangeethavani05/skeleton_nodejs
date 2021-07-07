const Service = require("../services/util_service.js");
const service = new Service();

class UserController {
  async getUser () {
    return { name: "Sangee" };
  }
}

module.exports = UserController;
