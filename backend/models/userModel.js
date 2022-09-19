const mongoose = require('mongoose');

const getRandomAmount = () => {
    return Math.floor(Math.random() * 2600);
}

const userSchema = new mongoose.Schema({
    username : {type: String, required: Boolean},
    password : {type: String, required: Boolean},
    email : {type: String, required: Boolean},
    firstName : {type: String},
    lastName : {type: String},
    gender : {type: String},
    address : {type: String},
    city : {type: String},
    postCode : {type: Number},
    wallet : {type: Number, default: getRandomAmount()},
    phoneNumber : {type: String},
    isAdmin : {type: String, required: Boolean, default: false},
    isActive: {type: String, required: Boolean,  default: false}
})

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;