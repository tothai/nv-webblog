const UserController = require('./controllers/UserControllers')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    /* RESFUL Api for users management */ 
    // create user

    app.post('/login', UserAuthenController.login)

    app.post('/user', UserController.create)

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId', UserController.remove)

    //get user by id
    app.get('/user/:userId', UserController.show)

    // get all user
    app.get('/users', isAuthenController, UserController.index)

    // app.get('/user/:userId', UserController.display)

}