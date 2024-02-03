// imports
const jwt = require('jsonwebtoken');
const env = require('../config/environment');

// generate JWT token
const generateToken = (user, tokenValidity = '1d') => {
    const token = jwt.sign(user.toJSON(), env.jwt_secret_key, {expiresIn: tokenValidity});
    return token;
}

// export
module.exports = generateToken;
