const mongoose = require('../config/Db');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
});

const UserModel = mongoose.model('Kitten', userSchema);

module.exports = UserModel;

// UserModel.create({ name: 'admin', password: '12345678' }).then(data => { console.log("ok"); })