// imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    cloudinary_id: {
        type: String
    }
}, {
    timestamps: true
});

// compare password with hashed DB password
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

// hash the password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }

    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});

// create the model
const User = mongoose.model('User', userSchema);

// export the model
module.exports = User;