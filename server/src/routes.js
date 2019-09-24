const UserController = require('./controllers/UserControllers')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const BlogController = require('./controllers/BlogController')

module.exports = (app) => {
    /* RESFUL Api for users management */ 
    
    // user login
    app.post('/login', UserAuthenController.login)

    // create user
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

    // blog routes
    // create blog
    app.post('/blog', BlogController.create)

    // edit blog, suspend, active
    app.put('/blog/:blogId', BlogController.put)

    // delete blog
    app.delete('/blog/:blogId', BlogController.remove)

    // get blog by id
    app.get('/blog/:blogId', BlogController.show)

    // get all blog
    app.get('/blogs', BlogController.index)


}