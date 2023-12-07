// imports
const express = require('express');

// create router
const router = express.Router();

// route the requets
router.use('/user', require('./user'));

// export the router
module.exports = router;