// Description: This file contains the actions related to chats.

// imports
const User = require('../../../model/user');
const Chat = require('../../../model/chat');

// action to create/access one-one chat
module.exports.accessChat = async function(req, res){
    try{
        const {userId} = req.body; // userId of second user

        // check if userId exists
        if(!userId){
            return res.status(400).json({
                message: 'Chat user userid not available',
                success: false
            });
        }

        // query to fetch chat based on users
        const query = {
            isGroupChat: false,
            $and: [
                { users: { $elemMatch: { $eq: req.user._id } } },
                { users: { $elemMatch: { $eq: userId } } }
            ]
        };

        // find the chat
        let existingChat = await Chat.find(query).populate('users', '-password').populate('latestMessage');
        existingChat = await User.populate(existingChat, {
            path: 'latestMessage.sender',
            select: 'name email profile'
        });

        // if chats are found
        if(existingChat.length > 0){
            return res.status(200).json({
                data: {
                    chatData: existingChat[0]
                },
                message: 'User chat fetched successfully',
                success: true
            });
        }else{
            const newChatData = {
                chatName: 'sender',
                isGroupChat: false,
                users: [req.user._id, userId]
            }

            // create new chat
            let newChat = await Chat.create(newChatData);
            newChat = await newChat.populate('users', '-password');

            if(newChat){
                return res.status(200).json({
                    data: {
                        chatData: newChat
                    },
                    message: 'New chat created successfully',
                    success: true
                });
            }else{
                return res.status(400).json({
                    message: 'Failed to create new chat',
                    success: false
                });
            }
        }
    }catch(err){
        console.log(`Error: ${err}`);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}


// action to fetch all chats for a user
module.exports.fetchChats = async function(req, res){
    try{
        // get the chats associated with current user
        let userChats = await Chat.find({ users: req.user._id })
            .populate('users', '-password')
            .populate('groupAdmin', '-password')
            .populate('latestMessage')
            .sort({ updatedAt: -1 });
        
        // populate latest message and it's sender details
        userChats = await User.populate(userChats, {
            path: 'latestMessage.sender',
            select: 'name email profile'
        });

        return res.status(200).json({
            data: {
                userChats
            },
            message: 'User chats fetched successfully',
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