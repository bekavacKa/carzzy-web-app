const MONGO_PASS = 'umotanubilo1911';
const MONGODB_URL = `mongodb+srv://carzzyDB01:${MONGO_PASS}@carzzydb.v6zxhfx.mongodb.net/?retryWrites=true&w=majority`;
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