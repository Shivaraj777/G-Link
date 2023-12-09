// Description: This file contains the actions related to user.

// imports
const User = require('../../../model/user');
const jwt = require('jsonwebtoken');

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
        const contactExists = await User.findOne({ contact });

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
        const user = await User.create(req.body);

        // if user is created successfully
        if(user){
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
                token: jwt.sign(user.toJSON(), 'g-link', {expiresIn: '500000'})
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