// Description: This file contains the actions related to chat messages.

// imports
const Message = require('../../../model/message');
const Chat = require('../../../model/chat');
const User = require('../../../model/user');

// action to send a message
module.exports.sendMessage = async function(req, res){
    try{
        const {content, chatId} = req.body;

        // if message content and chatId does not exist throw error
        if(!chatId || !content){
            return res.status(400).json({
                message: 'Please enter message content/chatId',
                success: false
            });
        }

        // set message details
        const messageDetails = {
            content: content,
            sender: req.user._id,
            chat: chatId
        };

        // create new message
        let newMessage = await Message.create(messageDetails);

        if(newMessage){
            // populate the chat and user details
            newMessage = await newMessage.populate('sender', 'name profile');
            newMessage = await newMessage.populate('chat');
            newMessage = await User.populate(newMessage, {
                path: 'chat.users',
                select: 'name email profile'
            });

            // update the latest message in chat
            await Chat.findByIdAndUpdate(chatId, {latestMessage: newMessage._id});

            return res.status(200).json({
                data: {
                    newMessage
                },
                message: 'New message created/sent successfully',
                success: true
            });
        }else{
            return res.status(400).json({
                message: 'Error in sending message',
                success: false
            });
        }
    }catch(err){
        console.log(`Eror: ${err}`);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}

