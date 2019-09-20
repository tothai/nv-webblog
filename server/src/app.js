let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/status', function (req, res) {
    res.send('Hello nodejs server')
})

app.get('/hello/:person', function (req, res) {
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' + req.params.person)
});

// get user by Id
app.get('/user/:userId', function(req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน ' + req.params.userId)
});

// get all user
app.get('/users', function(req, res) {
    res.send('เรีบกข้อมูลผู้ใช้งานทั้งหมด');
});

// create user
app.post('/user/', function (req, res) {
    res.send('ทำการสร้างผุ้ใช้งาน ' + JSON.stringify(req.body))
})

// edit user
app.put('/user/:userId', function (req, res) {
    res.send('ทำการแก้ไขผู้ใช้งาน ' + req.params.userId + ' : ' + JSON.stringify(req.body))
})

// delete user
app.delete('/user/:userId', function (req, res) {
    res.send('ทำการลบผู้ใช้งาน ' + req.params.userId + ' : ' + JSON.stringify(req.body))
})

// port definition and listen
let port = 8081
app.listen(port, function () {
    console.log(`Server started on port ` + port)
})

