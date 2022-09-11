const dbPassAndUrl = require('./dbPassAndUrl');

const MONGO_PASS = dbPassAndUrl.PASSWORD_DB;
const MONGODB_URL = dbPassAndUrl.URL_DB;
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

module.exports = {
    MONGO_PASS: MONGO_PASS,
    MONGODB_URL: MONGODB_URL,
    mongooseOptions: mongooseOptions
};