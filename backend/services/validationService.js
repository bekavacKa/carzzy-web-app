const authValidation = (req, res, next) => {
    console.log("token => ", req.headers.authorization);
    if(req.headers?.authorization){
        next()
    }
    else{
        res.send("Invalid authorization!!!")
    }
}

function validateUser(req, res, next){
    // console.log("=>>>", req.body);
    let reqBody = req.body;
    if(!reqBody.username || !reqBody.password){
        res.send("Not valid username or password!");
        return;
    }
    next();
}

module.exports = {
    authValidation,
    validateUser
}