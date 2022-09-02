const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/dbConfig');
const mongoose  = require('mongoose');
const Users = require('./models/userModel');

// const router = express.Router();
// console.log(dbConfig);
const app = express();

mongoose.connect(dbConfig.MONGODB_URL)
        .then(data => console.log("MONGODB FOR CARZZY IS CONNECTED"))
        .catch(err => console.log(`ERROR CONNECTING ON MONGODB (CARZZY) => ${err} `));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ! VRAĆA MI I ERR I DATA NULL IAKO DOBIJEM BODY, MORAM POGLEDAT ZASTO!!! 

app.post('/api/login', (req, res) => {
    console.log(req.body);
    const foundUser = Users.findOne(req.body, (err, data) => {
        console.log(data);
        if(err){
            const errMsg = `Error while finding user => ${err} `;
            console.log(errMsg);
            res.send(errMsg);
        }else{
            res.send(data);
        }

    })
    // console.log(foundUser);
    // res.send('Login API call working. +++!!')
});




app.listen(4000, err => {
    if(err){
        console.log(err);
    }else{
        console.log("Server is running on port: 4000 >>BEK<<");
    }
});

