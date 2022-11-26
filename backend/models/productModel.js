const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title : {type: String, required: Boolean},
    description: {type: String, required: Boolean},
    price : {type: Number, required: Boolean},
    isVisible : {type: Boolean, default: true},
    category : {type: String},
    // imageUrl : {type: String},
    imageFile : {type: String},
    rating: {type: Number},
})

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;