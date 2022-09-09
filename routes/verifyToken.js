const jwt = require("jsonwebtoken");
const { JWT_SEC } = require("../config/keys");



const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token
    if(authHeader) {
jwt.verify(token, JWT_SEC, (err, user) => {
    if (err) res.status(403).json("Token is not valid");
    req.user = user;
    next();
})
    } else {
        return res.status(401).json("You are not authenticated");
    }
}

const verifyTokenAndAuthorize = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        } else {
            res.status(403).json("You are not allowed")
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorize}