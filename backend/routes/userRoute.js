const express = require('express');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');


const Users = require('../models/userModel');
const Impressions = require('../models/userImpression');
// AUTH VALIDATION MIDDLE
const { authValidation, validateUser } = require('../services/validationService');

const routes = express.Router();



// LOGIN
routes.post('/login', validateUser, (req, res) => {
    const reqBody = req.body;
    // console.log(reqBody);
    const foundUser = Users.findOne(reqBody, (err, data) => {
        // console.log("Logged", data);
        if(err){
            const errMsg = `Error while finding user => ${err} `;
            console.log(errMsg);
            res.status(401).send(errMsg);
            return;
        }

        if (!data){
            console.log("User not found!");
            res.status(201).send("User not found");
        }else{
            let isUserActivate = data.isActive === 'true';
            let token = jwt.sign({...data}, 'shhhhh');
            res.status(isUserActivate ? 200 : 210 ).send(isUserActivate ? {token, userData : data} : "Please activate your account!");
        }
    })
});



// REGISTER
routes.post('/register', async (req,res) =>{
    const reqBody = req.body;
    console.log("TO Register =>", reqBody);
    const tryUsername = reqBody.username;

    Users.findOne({username : tryUsername}, async (err, data) =>{
        // console.log("daataaa",data);
        if(err){
            const errMsg = `Error while register user => ${err} `;
            console.log(errMsg);
            res.send(errMsg);
            return;
        }
        if(data){
            res.status(409).send(`User >> ${data.username} << already exist!`);
            console.log(`User >> ${data.username} << already exist!`);
        }else{
            const newUser = new Users(reqBody);
            const saveNewUser = await newUser.save();

            // Nodemailer
            let testAccount = await nodemailer.createTestAccount();

            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
                },
            });


            // TODO moram prominut rutu kad podignem aplikaciju
            // * DONE
            let info = await transporter.sendMail({
                from: '"CARZZY WEB APP 👻" <bekavac@web-app.com>', // TODO istrazit zasto ne moze gmail biti sender address
                to: reqBody.email, // list of receivers
                subject: "Activate your acc✔", // Subject line
                text: "To continue registration on Carzzy APP, please confirm your e-mail", // plain text body
                html: `
                <h1> Activate account </h1>
                <h2> Dear, ${reqBody.username} </h2>
                <h3> Please click on link to activate your account, ${reqBody.username} </h3>
                <a href="https://mern-carzzy-bekavac-ka.netlify.app/user-activate/${saveNewUser._id.toString()}" target="_blank" > ACTIVATE </a>
                `, // html body
              });

            //   console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));
              let acctivationLink = nodemailer.getTestMessageUrl(info);

            res.send({saveNewUser, acctivationLink } || `User >> ${data.username} << not registered.`);
        }
    })
});

// complete  registration 
routes.post('/complete-registration', (req, res) => {

    const userId = req.body.userId;

    Users.updateOne({"_id" : userId}, {isActive: true}, (err, data) => {
        if(err){
            console.log(err);
            res.status(401).send("ERROR complete-registration =>", err);
        } else {
            // console.log("SUCCESS complete-registration");
            res.status(201).send("SUCCESS complete registration");
        }
    })
});

// get all users 
routes.get('/all-users', async (req, res) => {

    Users.find((err, data) => {
        if (err) {
            console.log(err);
            res.send("ERROR. TRY AGAIN.");
            return;
        }
        if (data) {
            res.send(data)
        } else {
            res.send("USERS dont found")
        }
    })
});

// current user details with authorization token from headers

routes.get('/get-my-data/:userId', authValidation, (req, res) => {

    const decoded = jwt.verify(JSON.parse(req.headers.authorization), 'shhhhh');
    // console.log("dekodirano => ",decoded);

    const id = decoded._doc._id;
    // console.log("from details", id);
    // console.log("token => ", req.headers.authorization);

    Users.findOne({ "_id": id },(err, data) => {
        if (err) {
            console.log(err);
            res.send("ERROR. TRY AGAIN.");
            return;
        }
        if (data) {
            res.send(data)
        } else {
            res.send("USER dont found")
        }
    })
});

// user impressions

routes.get('/impressions', async (req, res) => {
    Impressions.find((err, data) => {
        if (err) {
            console.log(err);
            res.send("ERROR. TRY AGAIN.");
            return;
        }
        if (data) {
            res.send(data)
        } else {
            res.send("No impressions found")
        }
    })
});


module.exports = routes;