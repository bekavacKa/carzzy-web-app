const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
    email: {type: String, required: Boolean},
    subscribeDate: {type: Date, default: Date.now}
})

const SubscribeModel = mongoose.model("subscriptions", subscribeSchema)

module.exports = SubscribeModel