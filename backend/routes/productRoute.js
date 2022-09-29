const express = require('express');
const Products = require('../models/productModel');

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
})

module.exports = routes;