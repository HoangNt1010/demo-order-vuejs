const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const UserModel = require('./models/UserModel')
var jwt = require('jsonwebtoken');

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.post('/api/register', async (req, res, next) => {
    let name = req.body.name
    let password = req.body.password
    let checkLogin = await UserModel.find({name: name})
    if(checkLogin.length === 0) {
        let data = await UserModel.create({ name: name, password: password })
        if (data) {
            res.json({
                data: data,
                message: 'success'
            })
        } else {
            res.json({ message: 'create fail' })
        }
    } else {
        res.json({
            message: 'Fail(register)'
        })
    }
    
})

app.post('/api/login', (req, res, next) => {
    let name = req.body.name
    let password = req.body.password
    UserModel.find({ name }).then(data => {
        
        if (password !== data[0].password) {
            res.json({ message: 'wrong password' })
        } else {
            let token = jwt.sign({ name: name }, 'nodemy', { expiresIn: '1d' })
            res.json({ message: 'success', token: token, name: name })
        }

    }).catch(err => {
        console.log(err);
        res.json({ message: 'fail login' })
    })

})

app.listen(port, () => {
    console.log('Listening * port');
})