const express = require('express');
const Blogs = require('../models/blogModel');

const routes = express.Router();

routes.get('/all-blogs', async (req, res) => {
    Blogs.find((err, data) => {
        if (err) {
            console.log(err);
            res.send("ERROR. TRY AGAIN.");
            return;
        }
        if (data) {
            res.send(data)
        } else {
            res.send("No blogs found")
        }
    })
});



module.exports = routes;