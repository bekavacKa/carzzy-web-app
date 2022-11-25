const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const fs = require("fs");

const serverConfig = require('./config/serverConfig');
const dbConfig = require('./config/dbConfig');
const adminRoute = require('./routes/adminRoute');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const paymentRoute = require('./routes/paymentRoute');
const blogRoute = require('./routes/blogRoute');

const Products = require('./models/productModel');
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
app.use(fileUpload());

// ADMIN ROUTES 
app.use('/api/admin', adminRoute);

// USER ROUTES
app.use('/api/user', userRoute);

// PRODUCT ROUTES
app.use('/api/shop', productRoute);

//PAYMENT
app.use('/api/payment', paymentRoute);

// BLOG
app.use('/api/blog', blogRoute);

//  ? pod hitno popravit i skuzit zasto mi ne radi kad sve pribacim u admin route

app.post('/api/admin/add-new-product', (req,res) => {
    // console.log("product req body =>",req.body.product);
    // console.log("product req files =>",req.files.file);
    const reqBody = JSON.parse(req.body.product);
    console.log("PROORORO => ", reqBody);
    const file = req.files.file;
    const fileName = `${new Date().getTime()}_${file.name}`;
    const path = `${__dirname}/images/productImages/`;
    const filePath = `${path}${fileName}`;

    file.mv(filePath, err => {
        if (err) return res.status(416).res.send("err on uploda product image");

        Products.findOne(reqBody, async (err, data) => {
            // console.log(data);
            if (err) {
                const errorMsg = `Error on adding product: ${err}`;
                console.log(errorMsg);
                res.status(419).res.send(errorMsg);
                return;
            }
            if (data) res.send(`Product already exist`);
            else {
                const newProduct = new Products({...reqBody, imageFile: fileName});
                const saveNewProduct = await newProduct.save();
                console.log("Saved product",saveNewProduct);
                res.send(saveNewProduct || 'Product not saved');
            }
        });
    });
});

app.get('/images/productImages/:imageName', (req,res) => {
    fs.readFile(__dirname + "/images/productImages/" + req.params.imageName, (err, data) => {
        if (err) return res.send('no file');
        res.setHeader('Content-Type', 'image/jpg');
        res.setHeader('Content-Length', '');
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        res.send(data);
    })
});

app.get("/", (req, res) => {
    res.send("Test backend(NODEJS) for CARZZY WEB APP - Bekavac");
});


app.listen(serverConfig.port, err => {
    if(err){
        console.log(err);
    }else{
        console.log(serverConfig.serverRunnMsg);
    }
});

