const express = require('express');
// const fileUpload = require('express-fileUpload');

const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

const Users = require('../models/userModel');
const Products = require('../models/productModel');

// AUTH VALIDATION MIDDLE
const { authValidation, validateUser } = require('../services/validationService');

const routes = express.Router();
// const app = express();
// app.use(fileUpload());


// admin del user
routes.delete('/delete-selected-user/:userId', (req,res) => {
    const userParamId = req.params.userId;
    Users.deleteOne({ _id: userParamId },  async  (error) => {
        if (error) throw error;
        await res.send("User deleted");
    });
});

// admin edit user
routes.put('/edit-selected-user', (req,res) => {
    let id = req.body._id;
    let reqBody = req.body;
    Users.updateOne({ "_id": id }, {
        $set: 
            reqBody
    }, (err, data) => {
        if (err) {
            // console.log(err);
            const errorMsg = `Error on editing user: ${err}`;
            res.send(errorMsg);
        } else {
            res.send(data);
        }
    })
});

// admin add product
// * moze bolje ima bolja mongoosova metoda

// routes.post('/add-new-product', (req,res) => {
//     console.log("product req body =>",req.body.product);
//     console.log("product req files =>",req.files.file);
//     const file = req.files.file;
//     const path = `${__dirname}/files/`;

//     file.mv(`${path}${file.name}`, err => {
//         if (err) return res.send("err on uploda file");
//         res.send("file upload sucess")
//     })

// 	// Products.findOne(reqBody, async (err, data) => {
// 	// 	// console.log(data);
// 	// 	if (err) {
// 	// 		const errorMsg = `Error on adding product: ${err}`;
// 	// 		console.log(errorMsg);
// 	// 		res.send(errorMsg);
// 	// 		return;
// 	// 	}
// 	// 	if (data) res.send(`Product already exist`);
// 	// 	else {
// 	// 		const newProduct = new Products(reqBody);
// 	// 		const saveNewProduct = await newProduct.save();
// 	// 		console.log("Saved product",saveNewProduct);
// 	// 		res.send(saveNewProduct || 'Product not saved');
// 	// 	}
// 	// });

// });

// admin del product
routes.delete('/delete-selected-product/:productId', (req,res) => {
    const productParamId = req.params.productId;
    Products.deleteOne({ _id: productParamId },  async  (error) => {
        if (error) throw error;
        await res.send("Product deleted");
    });
});

// admin edit product
routes.put('/edit-selected-product' ,(req,res) => {
    let id = req.body._id;
    let reqBody = req.body;
    Products.updateOne({ "_id": id }, {
        $set: 
            reqBody
    }, (err, data) => {
        if (err) {
            // console.log(err);
            const errorMsg = `Error on editing product: ${err}`;
            res.send(errorMsg);
        } else {
            res.send(data);
        }
    })
})

module.exports = routes;