const express = require('express');
// const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const cors = require('cors');
const nodemailer = require("nodemailer");

const serverConfig = require('./config/serverConfig');
const dbConfig = require('./config/dbConfig');
const Users = require('./models/userModel');

// const router = express.Router();
// console.log(dbConfig);
const app = express();

mongoose.connect(dbConfig.MONGODB_URL)
        .then(data => console.log("MONGODB FOR CARZZY IS CONNECTED"))
        .catch(err => console.log(`ERROR CONNECTING ON MONGODB (CARZZY) => ${err} `));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors()); 


// USER API
// ! VRAĆA MI I ERR I DATA NULL IAKO DOBIJEM BODY, MORAM POGLEDAT ZASTO!!! 
// * POPRAVLJENO !
app.post('/api/login', (req, res) => {
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
        if(data){
            res.send(data);
        }
        else{
            console.log("User not found!");
            res.status(401).send("User not found");
        }
        // res.send(data ? data : "User not found" );
    })
    // console.log(foundUser);
    // res.send('Login API call working. +++!!')
});

// ? TRIBAM BOLJU PROVJERU/VALIDACIJU NAPRAVIT
// * POBOLJŠANO
app.post('/api/register', async (req,res) =>{
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


            let info = await transporter.sendMail({
                from: '"CARZZY WEB APP 👻" <bekavac@web-app.com>', // sender address
                to: reqBody.email, // list of receivers
                subject: "Activate your acc✔", // Subject line
                text: "To continue registration on Carzzy APP, please confirm your e-mail", // plain text body
                html: `
                <h1> Activate account </h1>
                <h3> Dear, ${reqBody.username} </h3>
                <h3> Please click on link to activate your account, ${reqBody.username} </h3>
                // TODO moram prominut rutu kad podignem aplikaciju
                <a href="http://localhost:3000/user-activate/${saveNewUser._id.toString()}" target="_blank" > ACTIVATE </a>
                `, // html body
              });

              console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));

            res.send(saveNewUser || `User >> ${data.username} << not registered.`);
        }
    })
});

// complete  registration 
app.post('/api/complete-registration', (req, res) => {

    const userId = req.body.userId;

    Users.updateOne({"_id" : userId}, {isActive: true}, (err, data) => {
        if(err){
            console.log(err);
            res.status(401).send("ERROR complete-registration =>", err);
        } else {
            console.log("SUCCESS complete-registration");
            res.status(201).send("SUCCESS complete registration");
        }
    })
})

// PRODUCT API





app.listen(serverConfig.port, err => {
    if(err){
        console.log(err);
    }else{
        console.log(serverConfig.serverRunnMsg);
    }
});

