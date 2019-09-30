const UserController = require('./controllers/UserControllers')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const BlogController = require('./controllers/BlogController')
const CommentController = require('./controllers/CommentController')

let multer = require('multer')

// upload section
let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./public/uploads")
    },
    filename: function(req, file, callback) {
        // callback(null, file.fieldname + '-' + Date.now())
        console.log(file)
        callback(null, file.originalname)
    }
})
let upload = multer({ storage:storage }).array("userPhoto", 10)

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

    // comments routes
    // create comment
    app.post('/comment', CommentController.create)

    // editcomment, suspend, active
    app.put('/comment/:commentId', CommentController.put)

    // delete comment
    app.delete('/comment/:commentId', CommentController.remove)

    // get comment by id
    app.get('/comment/:commentId', CommentController.show)

    // get all comment
    app.get('/comments', CommentController.index)

    // upload 
    app.post("/upload", function(req, res) {
        // isUserAuthenticated
        upload(req, res, function(err) {
            if (err) {
                return res.end("Error uploading file.")
            }
            res.end("File is uploaded")
        })
    })

    // delete file uploaded function
    app.post('/upload/delete', async function (req, res) {
        try {
            const fs = require('fs')
            console.log(req.body.filename)
            
            fs.unlink(process.cwd() + '/public/uploads/' + req.bodyfilename, (err) => {
                if (err) throw err
                res.send("delete successfully")
                // console.log('successfully deleted material file');
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete file the material'
            })
        }
    })

}