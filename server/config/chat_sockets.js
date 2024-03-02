const env = require('./environment');

// listen for web socket connections and events on client side
module.exports.chatSockets = function(socketServer){
    //create a Socket.IO server instance and bind it to the Node.js server instance
    let io = require('socket.io')(socketServer, {
        pingTimeOut: 60000,
        cors: {
            origin: env.client_fqdn,
            methods: ['GET', 'POST'],
            allowedHeaders: ['my-custom-header'],
            credentials: true
        }
    });


    io.on('connection', function(socket){
        console.log('New socket connection received', socket.id);

        // detect user connection
        socket.on('setup', (userData) => {
            socket.join(userData._id);
            console.log(`${userData.name} with _id: ${userData._id} is connected`);
            socket.emit('connected');
        })

        // detect join_room event
        socket.on('join_room', (room) => {
            if(!room){
                console.log('No room is selected by user');
                return;
            }

            socket.join(room);
            socket.in(room).emit('user_joined', room);
            console.log(`User has joined the room with _id: ${room._id}`);
        });

        // detect typing event
        socket.on('typing', (room) => socket.in(room).emit('typing', {
            senderId: room.senderId
        }));

        // detect stop typing event
        socket.on('stop_typing', (room) => socket.in(room).emit('stop_typing'));

        // detect new message event
        socket.on('new_message', (newMessageReceived) => {
            let chat = newMessageReceived.chat;

            if(!chat){
                return;
            }

            chat.users.map((user) => {
                if(user._id === newMessageReceived.sender._id){
                    return;
                }

                socket.in(user._id).emit('message_received', newMessageReceived);
            });
        })

        // detect socket disconnect
        socket.on('disconnect', () => {
            console.log('Socket disconnected');
        });
    });
}