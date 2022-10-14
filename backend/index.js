const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');

const serverConfig = require('./config/serverConfig');
const dbConfig = require('./config/dbConfig');
const adminRoute = require('./routes/adminRoute');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const paymentRoute = require('./routes/paymentRoute');

// const Products = require('./models/productModel');
// const nodemailer = require("nodemailer");
// const Users = require('./models/userModel');
// const bodyParser = require('body-parser');
// const fakeProducts = require('./fakeData/products.json');
// const router = express.Router();
// console.log(dbConfig);

const app = express();
mongoose.connect(dbConfig.MONGODB_URL)
        .then(data => console.log("MONGODB FOR CARZZY IS CONNECTED"))
        .catch(err => console.log(`ERROR CONNECTING ON MONGODB (CARZZY) => ${err} `));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors()); 

// ADMIN ROUTES 
app.use('/api/admin', adminRoute);

// USER ROUTES
app.use('/api/user', userRoute);

// PRODUCT ROUTES
app.use('/api/shop', productRoute);

//PAYMENT
app.use('/api/payment', paymentRoute);


app.listen(serverConfig.port, err => {
    if(err){
        console.log(err);
    }else{
        console.log(serverConfig.serverRunnMsg);
    }
});

