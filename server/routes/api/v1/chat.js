// imports
const express = require('express');
const ChatAPI = require('../../../controllers/api/v1/chat_api');
const passport = require('passport');

// create router
const router = express.Router();

// route the requests
router.post('/', passport.authenticate('jwt', {session: false}), ChatAPI.accessChat);

// export the router
module.exports = router;