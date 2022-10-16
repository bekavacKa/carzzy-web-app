const express = require('express');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

const Users = require('../models/userModel');
const Products = require('../models/productModel');

// AUTH VALIDATION MIDDLE
const { authValidation, validateUser } = require('../services/validationService');

const routes = express.Router();


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
            const errorMsg = `Error on updating user: ${err}`;
            res.send(errorMsg);
        } else {
            res.send(data);
        }
    })
})

// admin del product
routes.delete('/delete-selected-product/:productId', (req,res) => {
    const productParamId = req.params.productId;
    Products.deleteOne({ _id: productParamId },  async  (error) => {
        if (error) throw error;
        await res.send("Product deleted");
    });
});

module.exports = routes;