const Controller = require('../controllers/controller.js')

class Routes{
    constructor(){
        this.controller = new Controller();
    }
}

exports.Routes = Routes;