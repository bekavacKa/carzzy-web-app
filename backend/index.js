const express = require('express');
// const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const cors = require('cors');

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
            res.status(416).send(errMsg);
            return;
        }
        if(data){
            res.send(data);
        }
        else{
            console.log("User not found!");
            res.send("User not found");
        }
        // res.send(data ? data : "User not found" );
    })
    // console.log(foundUser);
    // res.send('Login API call working. +++!!')
});

// ? TRIBAM BOLJU PROVJERU/VALIDACIJU NAPRAVIT
// Tu stao
app.post('/api/register', async (req,res) =>{
    const reqBody = req.body;
    console.log("TO Register =>", reqBody);
    const usernameTryReg = reqBody.username;
    const emailTryReg  = reqBody.email;
    // Users.findOne({usernameTryReg, emailTryReg}, async (err, data) =>{
    //     console.log("daataaa",data);
    // })


    // const foundUser = Users.findOne(reqBody, async (err, data) => {
    //     if(err){
    //         const errMsg = `Error while register user => ${err} `;
    //         console.log(errMsg);
    //         res.send(errMsg);
    //         return;
    //     }

    //     if (data) {
    //         res.send(`User >> ${data.username} << already exist!`);
    //     }else{
    //         const newUser = new Users(reqBody);
    //         const saveNewUser = await newUser.save();
    //         // console.log(saveNewUser);
    //         res.send(saveNewUser || "User is not registered");
    //     }
    // })
});




app.listen(serverConfig.port, err => {
    if(err){
        console.log(err);
    }else{
        console.log(serverConfig.serverRunnMsg);
    }
});

