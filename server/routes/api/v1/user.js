// imports
const express = require('express');
const usersAPI = require('../../../controllers/api/v1/users_api');
const passport = require('passport');

// create the router
const router = express.Router();

// route the requets
router.post('/register', usersAPI.createUser);
router.get('/create-session', usersAPI.createSession);
router.get('/search-users/:search', passport.authenticate('jwt', {session: false}), usersAPI.searchUsers);


// export the router
module.exports = router;