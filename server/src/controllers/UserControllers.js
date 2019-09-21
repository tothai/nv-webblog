const {User} = require('../models')

module.exports = {
    // get all user
    async index (req, res) {
        try {
            const users = await User.findAll()
            res.send(users);
        } catch (err) {
            res.status(500).send({
                error: 'The users information was incorrect'
            })
        }
        // res.send('เรีบกข้อมูลผู้ใช้งานทั้งหมด');
    },
    
    // create user
    // async ใส่ไว้ที่หน้า function
    async create (req, res) { // req = รับค่าตัวแปรที่ url แนบมา, res = ค่าที่ส่งไปที่ web browser
        try { // verify error 
                      // await ใส่ที่หน้่าคำสั่งที่ต้องการให้หยุดรอ
            const user = await User.create(req.body) 
            res.send(user.toJSON())
        } catch (err) { // an error 
            res.status(500).send({
                error: 'Create user incorrect'
            })
        }
        // res.send('ทำการสร้่างผู้ใช้ ' + JSON.stringify(req.body));
    },

    // edit user, suspend, active
    async put (req, res) { 
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.userId
                }
            })
            res.send(req.body)

        } catch (err) {
            res.status(500).send({
                error: 'Update user incorrect'
            })
        }
        // res.send('ทำการแก้ไขผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body));
    },

    // delete user
    async remove (req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            })

            if (!user) {
                return res.status(403).send({
                    error: 'The user information was incorrect'
                })
            }

            await user.destroy()
            res.send(user)

        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
        // res.send('ทำการลบผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringifyreq.body);
    },

    // async index (req, res) {
    //     try {
    //         const users = await User.findAll()
    //         res.send(users);
    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'The users information was incorrect'
    //         })
    //     }
    //     // res.send('เรีบกข้อมูลผู้ใช้งานทั้งหมด');
    // },

    // get user by id
    async show (req, res) {
        try {
            const user = await User.findById(req.params.userId)
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
        // res.send('ดูข้อมูลผู้ใช้งาน ' + req.params.userId);
    },
}