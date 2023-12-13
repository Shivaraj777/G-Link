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
router.get('/get-user-detail', passport.authenticate('jwt', {session: false}), usersAPI.getUser);
router.put('/update-profile', passport.authenticate('jwt', {session: false}), usersAPI.updateProfile);
router.get('/resend/verification-email', usersAPI.resendVerificationEmail);
router.patch('/verify-email', usersAPI.verifyEmail);
router.get('/forgot-password', usersAPI.forgotPassword);


// export the router
module.exports = router;