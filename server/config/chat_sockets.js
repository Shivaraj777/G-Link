
// listen for web socket connections and events on client side
module.exports.chatSockets = function(socketServer){
    //create a Socket.IO server instance and bind it to the Node.js server instance
    let io = require('socket.io')(socketServer, {
        cors: {
            origin: '*'
        }
    });

    io.on('connection', function(socket){
        console.log('New socket connection received', socket.id);

        socket.on('disconnect', function(){
            console.log('Socket disconnected');
        });
    });
}