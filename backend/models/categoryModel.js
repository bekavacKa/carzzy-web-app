const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title : {type: String, required: Boolean},
    imageUrl : {type: String},
    // products : {type: Object}
})

const categoryModel = mongoose.model('categories', categorySchema);

module.exports = categoryModel;