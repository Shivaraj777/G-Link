// Description: This file contains the actions related to user.

// imports
const User = require('../../../model/user');
const jwt = require('jsonwebtoken');
const utils = require('../../../utils');
const usersMailer = require('../../../mailers/users_mailer');
const cloudinary = require('../../../config/cloudinary');
const env = require('../../../config/environment');

// action to create/register user
module.exports.createUser = async function(req, res){
    try{
        const {name, email, password, contact} = req.body;

        // check if fileds are not blank
        if(!name || !email || !password || !contact){
            return res.status(400).json({
                message: 'Please enter all the field details!',
                success: false
            });
        }

        // check if user is already registered
        const emailExists = await User.findOne({ email });
        const contactExists = await User.findOne({ contact: parseInt(contact, 10) });

        // if email is already registered
        if(emailExists){
            // console.log('User email is already registered!');
            return res.status(400).json({
                message: 'User email is already registered!',
                success: false
            });
        }

        // if contact no. is already registered
        if(contactExists){
            // console.log('User phone no. is already registered!');
            return res.status(400).json({
                message: 'User phone no. is already registered!',
                success: false
            });
        }

        // create user
        const user = await User.create({...req.body, contact: parseInt(contact, 10)});

        // if user is created successfully
        if(user){
            // send verification email
            const token = utils.generateToken(user, '120s');
            const url = `${env.client_fqdn}/verify-email/${token}`;
            usersMailer.verifyAccount(user, url);

            // console.log('User registered successfully');
            return res.status(200).json({
                data: {
                    user
                },
                message: 'User resistered successfully!',
                success: true
            });
        }else{
            // console.log('Error in creating user');
            return res.status(400).json({
                message: 'Error in creating user',
                success: false
            });
        }
    }catch(err){
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}


// action to sign-in a user
module.exports.createSession = async function(req, res){
    try{
        const {email, password} = req.body;

        // find the user
        const user = await User.findOne({ email });

        // check for invalid credentials
        if(!user || !(await user.matchPassword(password))){
            return res.status(422).json({
                message: 'Invalid username/password',
                success: false
            });
        }

        return res.status(200).json({
            data: {
                token: utils.generateToken(user)
            },
            message: 'Sign-in successfull, here is your token. Please keep it safe',
            success: true
        });
    }catch(err){
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: 'Internal Server error',
            success: false
        });
    }
}

// action to search users
module.exports.searchUsers = async function(req, res){
    try{
        // query -> returns users whose name and email matches keyword
        const keyword = req.params.search
            ? {
                $or: [
                    { name: { $regex: req.params.search, $options: 'i' }},
                    { email: { $regex: req.params.search, $options: 'i' }}
                ]
            }
            : {};

        // fetch all users except logged-in user
        const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });

        res.status(200).json({
            data: {
                users
            },
            message: 'Fetched all the users successfully',
            success: true
        });
    }catch(err){
        console.log(`Error: ${err}`);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}

// action to get current user details
module.exports.getUser = function(req, res){
    try{
        const userDetails = req.user;
        return res.status(200).json({
            data: {
                userDetails
            },
            message: 'User details fetched successfully!',
            success: true
        });
    }catch(err){
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: 'Internal server error',
            sucess: false
        });
    }
}

// action to update user profile
module.exports.updateProfile = async function(req, res){
    try{
        const { name, about} = req.body;

        // name and about are blank
        if(!name || !about){
            return res.status(400).json({
                message: 'Name/About cannot be blank',
                success: false
            });
        }

        // update user details
        const user = await User.findByIdAndUpdate(req.user._id, { $set: {name: name, about: about} }, {new: true}).select('-password');

        return res.status(200).json({
            data: {
                user
            },
            message: 'User profile updated successfully',
            success: true
        });
    }catch(err){
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}

// action to re-send verification link
module.exports.resendVerificationEmail = async (req, res) => {
    try{
        const {email} = req.body;

        // find the user
        const user = await User.findOne({email});

        // if user is not found
        if(!user){
            console.log('Invalid email address');
            return res.status(400).json({
                message: 'Invalid email address',
                success: false
            });
        }

        // if user is found send verification email
        const token = utils.generateToken(user, '120s');
        const url = `${env.client_fqdn}/verify-email/${token}`;
        usersMailer.verifyAccount(user, url); 

        return res.status(200).json({
            message: `An email is sent to ${user.email}. Please verify your email.`,
            success: true
        });
    }catch(err){
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}

// action to verify email
module.exports.verifyEmail = async function(req, res){
    try{
        // decode the token
        const {token} = req.body;
        const decodedJWT = jwt.verify(token, env.jwt_secret_key);
        // console.log(decodedJWT);

        // find the user
        const user = await User.findById(decodedJWT._id);

        // if user not found
        if(!user){
            console.log('The verification link has expired/Invalid link');
            return res.status(400).json({
                message: 'The verification link has expired/Invalid link',
                status: false
            });
        }

        // if user is found set accpunt as verified
        user.is_verified = true;
        user.save();

        return res.status(200).json({
            message: 'User Email verified successfully',
            success: true
        });
    }catch(err){
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: 'The verification link has expired/Invalid link',
            success: false
        });
    }
}

// action to email reset password link
module.exports.forgotPassword = async function(req, res){
    try{
        const {email} = req.body;

        // find the user
        const user = await User.findOne({email});

        // if user not found
        if(!user){
            console.log('Invalid email address');
            return res.status(400).json({
                message: 'Invalid user, please enter a valid email',
                success: false
            });
        }

        // send email to reset password
        const token = utils.generateToken(user, '300s');
        const passwordResetURL = `${env.client_fqdn}/reset-password/${token}`;
        usersMailer.forgotPasswordMail(user, passwordResetURL);

        return res.status(200).json({
            message: `A link to reset your password is sent to ${user.email}. Please reset your password`,
            success: true
        });
    }catch(err){
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: 'Interal server error',
            success: false
        });
    }
}

// action to reset password
module.exports.resetPassword = async function(req, res){
    try{
        const {token, newPassword} = req.body;

        // decode the token and find the user
        const decodedJWT = jwt.verify(token, env.jwt_secret_key);
        let user = await User.findById(decodedJWT._id);

        if(!user){
            console.log('The Token is expired/invalid');
            return res.status(400).json({
                message: 'The Token is expired/invalid',
                success: false
            });
        }

        // if user is found reset the password
        user.password = newPassword;
        user = await user.save();

        return res.status(200).json({
            message: 'User password reset successfully',
            success: true
        });

    }catch(err){
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: 'Internal server Error',
            success: false
        });
    }
}

// action to update/upload user profile image
module.exports.uploadProfileImage = async function(req, res){
    try{
        const file = req.file;

        // find the user
        let user = await User.findById(req.user.id);

        // if user not found
        if(!user){
            console.log('Invalid user');
            return res.status(400).json({
                message: 'Invalid user',
                success: false
            });
        }

        // delete existing profile image from cludinary
        if(user.cloudinary_id){
            await cloudinary.uploader.destroy(user.cloudinary_id);
        }

        // upload new profile image to cloudinary
        const result = await cloudinary.uploader.upload(file.path);

        // update user
        user.profile = result.secure_url || user.profile;
        user.cloudinary_id = result.public_id || user.cloudinary_id;
        user = await user.save();

        return res.status(200).json({
            data: {
                user
            },
            message: 'User profile image uploaded successfully',
            success: true
        });
    }catch(err){
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}