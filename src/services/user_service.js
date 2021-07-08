class UserService {
  constructor (logger) {
    this.logger = logger;
  }

  async getUser () {
    this.logger.info("I am from User Service");
    return { name: "Sangee" };
  }
}

exports.UserService = UserService;
