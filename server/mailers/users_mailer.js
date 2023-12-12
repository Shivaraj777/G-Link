// imports
const nodemailer = require('../config/nodemailer');
const env = require('../config/environment');

// send verification email to verify user email
module.exports.verifyAccount = (user, url) => {
    console.log('Inside Verify Account mailer');

    // render html template for email
    let htmlString = nodemailer.renderTemplate({user: user, url: url}, '/users/account_verification.ejs');

    // send the email
    nodemailer.transporter.sendMail({
        from: env.smtp.auth.user,
        to: user.email,
        subject: 'Verify Email',
        html: htmlString
    },
    (err, info) => {
        if(err){
            console.log('Error in sending email: ', err);
            return;
        }

        console.log('E-mail sent successfully', info);
    });
}