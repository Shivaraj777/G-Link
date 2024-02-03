// imports
const mongoose = require('mongoose');
const env = require('./environment');

// establish connection to the database
mongoose.connect(env.mongodb_url);
const db = mongoose.connection;

// if error
db.on('error', console.error.bind(console, 'Error connecting to mongoDB'));

// if connection is successfull
db.once('open', () => {
    console.log('Sucessfully connected to the database');
});

// export the module
module.exports = db;