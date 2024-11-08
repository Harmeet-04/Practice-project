var jwt = require("jsonwebtoken");
const errorHandler = require('./errorHandler');

const generateToken = (userData) => {
    // Creating new token
    return jwt.sign(userData, process.env.PRIVATE_KEY);
}

const validateToken = (res, req, next) => {
    // Checks if token is available or not
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ err: "Token unauthorized" });
    }

    // Storing value from header
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ err: " Unauthorized User" });
    }
    try{
        const validToken = jwt.verify(token, process.env.PRIVATE_KEY);
        if(validToken){
            req.user= validToken;
            next();
        }
    }
    catch{
        errorHandler(err,() => {});
    }
}

module.exports = {generateToken, validateToken};