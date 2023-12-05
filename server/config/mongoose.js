// imports
const mongoose = require('mongoose');

// establish connection to the database
mongoose.connect('mongodb://127.0.0.1/g-link_development');
const db = mongoose.connection;

// if error
db.on('error', console.error.bind(console, 'Error connecting to mongoDB'));

// if connection is successfull
db.once('open', () => {
    console.log('Sucessfully connected to the database');
});

// export the module
module.exports = db;