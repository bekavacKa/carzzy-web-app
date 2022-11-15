const express = require('express');
const Products = require('../models/productModel');
const Categories = require('../models/categoryModel');
const Banners = require('../models/bannerModel');
const Sponsors = require('../models/sponsorModel'); 

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

routes.get('/random-products/:num', (req, res) => {
    let productsNum = req.params.num;
    Products.find((err, data) => {
        if(err){
            console.log( "Random Products Err => ", err);
            res.send("error, try again later");
            return;
        }
        if(data){
            let dataCopy = [...data];
            let randomProducts = [];
            for (let i = 0; i < productsNum; i++){
                let rand = Math.floor(Math.random() * dataCopy.length);
                randomProducts.push(dataCopy[rand]);
                dataCopy.splice(rand,1);
            }
            res.send(randomProducts);
        } else {
            res.send("no products found");
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


routes.get('/products-categories', async (req, res) => {

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

routes.get('/banners', async (req, res) => {

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
});

routes.get('/random-banners/:num', (req, res) => {
    let bannerNum = req.params.num;
    Banners.find((err, data) => {
        if(err){
            console.log( "Random Banners Err => ", err);
            res.send("error, try again later");
            return;
        }
        if(data){
            let dataCopy = [...data];
            let randomBanners = [];
            for (let i = 0; i < bannerNum; i++){
                let rand = Math.floor(Math.random() * dataCopy.length);
                randomBanners.push(dataCopy[rand]);
                dataCopy.splice(rand,1);
            }
            res.send(randomBanners);
        } else {
            res.send("no banners found");
        }
    })
});

routes.get('/products-category/:catName', async (req, res) => {

    const catName = req.params.catName;

    Products.find({"category" : catName}, (err, data) => {
        // console.log("categggg =>",data);
        if (err) {
            console.log(err);
            res.send("ERROR. TRY AGAIN.");
            return;
        }
        if (data) {
            res.send(data)
        } else {
            res.send("Category dont found")
        }
    })
});

// sponsors
routes.get('/all-sponsors', async (req, res) => {
    Sponsors.find((err, data) => {
        if (err) {
            console.log(err);
            res.send("ERROR. TRY AGAIN.");
            return;
        }
        if (data) {
            res.send(data)
        } else {
            res.send("Sponsors dont found")
        }
    })
});





module.exports = routes;