let service = require('../services/util_service.js')
service = new service()

class UserController{

    async getUser(){
        return {'name': 'Sangee'}
    }
}

module.exports = UserController;