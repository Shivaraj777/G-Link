// imports
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const env = require('./environment');

// define transporter for sending emails
let transporter = nodemailer.createTransport(env.smtp);

// render the html template for email
let renderTemplate = (data, relativePath) => {
    let mailHTML;

    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath), //path of the html template
        data, //data passed to the html template
        function(err, template){
            if(err){
                console.log('Error in rendering template', err);
                return;
            }

            // store the html template
            mailHTML = template;
        }
    );

    return mailHTML;
}

// export
module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}