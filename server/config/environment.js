// development environment
const development = {
    name: 'development',
    mongodb_url: 'mongodb://127.0.0.1/g-link_development',
    jwt_secret_key: 'g-link',
    client_fqdn: 'http://localhost:3000',
    smtp: {
        service: 'gmail',                //service to be used for sending emails
        host: 'smtp.gmail.com',         //domain used by developers to interact with service    
        port: 587,
        secure: false,  
        auth: {         
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GLINK_GMAIL_PASSWORD
        }
    },
    coudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    coudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET
}

// production environment
const production = {
    name: 'development',
    mongodb_url: process.env.GLINK_MONGODB_URL,
    jwt_secret_key: process.env.GLINK_JWT_SECRET_KEY,
    client_fqdn: process.env.GLINK_CLIENT_FQDN,
    smtp: {
        service: 'gmail',                //service to be used for sending emails
        host: 'smtp.gmail.com',         //domain used by developers to interact with service    
        port: 587,
        secure: false,  
        auth: {         
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GLINK_GMAIL_PASSWORD
        }
    },
    coudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    coudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET
}

module.exports = eval(process.env.NODE_ENV) == undefined ? development : eval(process.env.NODE_ENV);