// imports
const express = require('express');
const db = require('./config/mongoose');

const app = express();
const port = 8000;

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