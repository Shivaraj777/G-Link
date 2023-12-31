// imports
const express = require('express');

// create router
const router = express.Router();

// route the requets
router.use('/user', require('./user'));
router.use('/chat', require('./chat'));
router.use('/message', require('./message'));

// export the router
module.exports = router;