const mongoose = require('mongoose');

const impressionSchema = new mongoose.Schema({
    name : {type: String, required: Boolean},
    imageUrl : {type: String, required: Boolean},
    userText : {type: String, required: Boolean},
    // publishDate : {type: Date, default: Date.now},
    // isVisible: {type: String, required: Boolean, default: false}
})

const ImpressionModel = mongoose.model('impressions', impressionSchema);

module.exports = ImpressionModel;