// imports
const mongoose = require('mongoose');

// create the message schema
const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        trim: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }
}, {
    timestamps: true
});

// create the model
const Message = mongoose.model('Message', messageSchema);

// export the model
module.exports = Message;