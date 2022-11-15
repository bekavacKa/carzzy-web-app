const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : {type: String, required: Boolean},
    imageUrl : {type: String, required: Boolean},
    publisher : {type: String, required: Boolean},
    blogText : {type: String},
    publishDate : {type: Date, default: Date.now},
    isVisible: {type: String, required: Boolean, default: false}
})

const BlogModel = mongoose.model('blogs', blogSchema);

module.exports = BlogModel;