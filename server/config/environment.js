// development environment
const development = {
    name: 'development',
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

module.exports = development;