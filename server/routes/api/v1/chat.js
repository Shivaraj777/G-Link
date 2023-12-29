// imports
const express = require('express');
const ChatAPI = require('../../../controllers/api/v1/chat_api');
const passport = require('passport');

// create router
const router = express.Router();

// route the requests
router.post('/', passport.authenticate('jwt', {session: false}), ChatAPI.accessChat);
router.get('/', passport.authenticate('jwt', {session: false}), ChatAPI.fetchChats);
router.post('/create-group', passport.authenticate('jwt', {session: false}), ChatAPI.createGroupChat);
router.patch('/rename-group', passport.authenticate('jwt', {session: false}), ChatAPI.renameGroupChat);
router.put('/add-to-group', passport.authenticate('jwt', {session: false}), ChatAPI.addUserToGroup);
router.put('/remove-from-group', passport.authenticate('jwt', {session: false}), ChatAPI.removeUserFromGroup);

// export the router
module.exports = router;