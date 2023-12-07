// imports
const express = require('express');
const usersAPI = require('../../../controllers/api/v1/users_api');

// create the router
const router = express.Router();

// route the requets
router.post('/register', usersAPI.createUser);


// export the router
module.exports = router;