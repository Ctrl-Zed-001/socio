const express = require('express')
const router = express.Router()

router.post('/signup', (req, res) => {
    console.log(req.body)
    res.send('got it')
})

router.post('/login', (req, res) => {
    if (req.body.email == 'zshake11@gmail.com' && req.body.password == 'kaioken*2') {
        res.send("welcome user")
    } else {
        res.send("incorrect email or password")
    }
})



module.exports = router