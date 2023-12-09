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
    }
}

module.exports = development;