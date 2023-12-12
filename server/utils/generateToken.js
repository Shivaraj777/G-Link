// imports
const jwt = require('jsonwebtoken');

// generate JWT token
const generateToken = (user, tokenValidity = '1d') => {
    const token = jwt.sign(user.toJSON(), 'g-link', {expiresIn: tokenValidity});
    return token;
}

// export
module.exports = generateToken;
