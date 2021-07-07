const userRoute = require('./user_route.js')

class Routes{
    constructor(app){
        this.app = app;
    }
    init(){
        this.app.get('/', (req, res) => res.send({'test': 'OK'}))
        this.app.use('/users', userRoute)
    }
}

module.exports = Routes;