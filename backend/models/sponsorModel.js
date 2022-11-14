const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
    title : {type: String, required: Boolean},
    imageUrl : {type: String, required: Boolean},
    isVisible: {type: String, required: Boolean, default: false}
})

const SponsorModel = mongoose.model('sponsors', sponsorSchema);

module.exports = SponsorModel;