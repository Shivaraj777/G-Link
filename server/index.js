// imports
const express = require('express');
const db = require('./config/mongoose');
const paspport = require('passport');
const passwortJWT = require('./config/passport-jwt-strategy');
const cors = require('cors');

const app = express();
const port = process.env.port || 8000;

// create chat server using express app
const chatServer = require('http').createServer(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer); 
chatServer.listen(8080);
console.log('Chat server is listening on port 8080');

// enable CORS
app.use(cors());

//middleware to parse the form data
app.use(express.urlencoded({extended: true}));

// middleware to route the requets
app.use('/', require('./routes/index'));

// listen on the server
app.listen(port, (err) => {
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
});