const express = require('express');
const Products = require('../models/productModel');
const Categories = require('../models/categoryModel');
const Banners = require('../models/bannerModel');

const routes = express.Router();

routes.get('/all-products', async (req, res) => {

    Products.find((err, data) => {
        if (err) {
            console.log(err);
            res.send("ERROR. TRY AGAIN.");
            return;
        }
        if (data) {
            res.send(data)
        } else {
            res.send("Product dont found")
        }
    })
});

routes.get("/single-product/:productId", (req, res) => {
    const productId = req.params.productId;
    Products.findOne({ _id: productId }, (err, data) => {
        if (err) {
            // console.log(error);
            res.status(401).send(err)
            return;
        }

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(401).send("Product dont found");
        }
    })
});

routes.get('/products/search/:searchTerm', (req, res) => {
    const searchTerm = req.params.searchTerm;
    Products.find({ title: { $regex: searchTerm, "$options": "i" } }, (error, data) => {
        if (error) {
            console.log(error);
            res.send(error);
        }
        console.log("searched =>", data);
        res.send(data);
    })
});

// TODO vraca mi prazan arrayn moram nac bolju metodu
routes.get('/filtered-products/:price', (req, res) => {
    const price = req.params.price;
    console.log("price =>>", price);
    Products.find({ price: { $lt: price } }, (err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        if(data){
            console.log("sss",data);
            res.send(data);
        }
    })
});


routes.get('/products-categories', (req, res) => {

    Categories.find((err, data) => {
        if (err) {
            console.log(err);
            res.send("ERROR. TRY AGAIN.");
            return;
        }
        if (data) {
            res.send(data)
        } else {
            res.send("categories dont found")
        }
    })
});

routes.get('/banners', (req, res) => {

    Banners.find((err, data)  =>  {
        if (err) {
            console.log(err);
            res.send("ERROR. TRY AGAIN.");
            return;
        }
        if (data) {
            res.send(data)
        } else {
            res.send("banners dont found")
        }
    })
})




module.exports = routes;