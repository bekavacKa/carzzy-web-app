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

// admin del product
routes.delete('/delete-selected-product/:productId', (req,res) => {
    const productParamId = req.params.productId;
    Products.deleteOne({ _id: productParamId },  async  (error) => {
        if (error) throw error;
        await res.send("Product deleted");
    });
});

module.exports = routes;