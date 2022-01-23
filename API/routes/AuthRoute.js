const express = require('express')
const router = express.Router()
const User = require('../model/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


router.post('/signup', async (req, res) => {

    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress

    // // STEP 1 : CHECK IF USER EXISTS
    let oldUser = await User.findOne({ email })

    if (oldUser) {
        res.status(200).json({
            status: 'failed',
            message: "User already exists."
        })
    } else {
        // STEP 2 : CHECK IF USERNAME IS TAKEN
        let is_username_taken = await User.findOne({ username })
        if (is_username_taken) {
            res.json({
                status: 'failed',
                message: "Username is already in use."
            })
        } else {
            // STEP 3 : ENCRYPT THE PASSWORD
            let salt = await bcrypt.genSalt(10)
            let encrypted_password = await bcrypt.hash(password, salt)


            // STEP 4 : SAVE USER TO DB
            const user = await User.create({
                email: email.toLowerCase(),
                username: username,
                password: encrypted_password,
                creator_ip: '127.0.0.1',
                updator_ip: '127.0.0.1'
            });

            // STEP 5 : CREATE AND SEND JWT
            let token = jwt.sign(JSON.stringify(user), process.env.SECRET)

            res.status(200).json({
                status: 'success',
                token: `_bearer ${token}`
            })
        }

    }
})

router.post('/login', (req, res) => {
    if (req.body.email == 'zshake11@gmail.com' && req.body.password == 'kaioken*2') {
        res.send("welcome user")
    } else {
        res.send("incorrect email or password")
    }
})



module.exports = router