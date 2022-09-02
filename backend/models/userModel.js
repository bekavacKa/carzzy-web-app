const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {tyoe: String, required: Boolean},
    password : {tyoe: String, required: Boolean}
})

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;