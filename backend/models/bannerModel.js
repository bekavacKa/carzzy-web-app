const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    title : {type: String, required: Boolean},
    subtitle : {type: String, required: Boolean},
    imageUrl : {type: String},
    infoPosition : {type: String},
    buttonText : {type: String}
})

const bannerModel = mongoose.model('banners', bannerSchema);

module.exports = bannerModel;