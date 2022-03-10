const jwt = require('jsonwebtoken')

require('dotenv/config');

const ENV = process.env;

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return next({
            status: 401,
            error: 1,
            message: 'invalid_token',
            data: null
        });
    }
    try{
        const decoded = jwt.verify(token, ENV.JWT_SECRET_KEY);
        req.payload = decoded;
        next();
    }catch (err){
        return next({
            status: 401,
            error: 1,
            message: err.message,
            data: null
        });
    }
}