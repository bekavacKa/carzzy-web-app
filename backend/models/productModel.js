const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // id : {type: Number},
    title : {type: String, required: Boolean},
    description: {type: String, required: Boolean},
    price : {type: Number, required: Boolean},
    category : {type: String},
    imageUrl : {type: String},
    rating: {type: Number},
})

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;