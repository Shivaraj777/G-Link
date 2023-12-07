// imports
const mongoose = require('mongoose');

// create the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        default: 'Hey there, I am using G-Link'
    },
    contact: {
        type: Number,
        required: true
    },
    profile: {
        type: String,
        default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    }
}, {
    timestamps: true
});

// create the model
const User = mongoose.model('User', userSchema);

// export the model
module.exports = User;