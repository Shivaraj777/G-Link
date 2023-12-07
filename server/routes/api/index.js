// imports
const express = require('express');

// create router
const router = express.Router();

// route thr requests
router.use('/v1', require('./v1'));

// export the router
module.exports = router;