module.exports = {
    // get all user
    index (req, res) {
        res.send('เรีบกข้อมูลผู้ใช้งานทั้งหมด');
    },
    
    // create user
    create (req, res) {
        res.send('ทำการสร้่างผู้ใช้ ' + JSON.stringify(req.body));
    },

    // deit user, suspend, active
    put (req, res) {
        res.send('ทำการแก้ไขผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body));
    },

    // delete user
    remove (req, res) {
        res.send('ทำการลบผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringifyreq.body);
    },

    // get user by id
    show (req, res) {
        res.send('ดูข้อมูลผู้ใช้งาน ' + req.params.userId);
    }
}