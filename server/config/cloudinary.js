// imports
const cloudinary = require('cloudinary').v2;
const env = require('./environment');

// setup config
cloudinary.config({
    cloud_name: env.coudinary_cloud_name,
    api_key: env.coudinary_api_key,
    api_secret: env.cloudinary_api_secret,
    secure: false
});

// export the module
module.exports = cloudinary;