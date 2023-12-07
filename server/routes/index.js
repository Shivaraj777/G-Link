// imports
const express = require('express');

// create router
const router = express.Router();

console.log('Router loaded');

// route the requests
router.use('/api', require('./api'));

// export the router
module.exports = router;