const Service = require('../services/service.js')

class Controller{
    constructor(){
        this.service = new Service();
    }
}

exports.Controller = Controller