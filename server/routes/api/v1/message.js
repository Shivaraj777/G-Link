// imports
const express = require('express');
const MessagesAPI = require('../../../controllers/api/v1/messages_api');
const passport = require('passport');

// create router
const router = express.Router();

// route thr requests
router.post('/send-message', passport.authenticate('jwt', {session: false}), MessagesAPI.sendMessage);
router.get('/:chatId', passport.authenticate('jwt', {session: false}), MessagesAPI.getMessages);

// export router
module.exports = router;