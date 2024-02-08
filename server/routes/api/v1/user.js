// imports
const express = require('express');
const usersAPI = require('../../../controllers/api/v1/users_api');
const passport = require('passport');
const multer = require('multer');

// create the router
const router = express.Router();

// creating multer storage
const storage = multer.diskStorage({});
const upload = multer({storage});

// route the requets
router.post('/register', usersAPI.createUser);
router.post('/create-session', usersAPI.createSession);
router.get('/search-users/:search', passport.authenticate('jwt', {session: false}), usersAPI.searchUsers);
router.get('/get-user-detail', passport.authenticate('jwt', {session: false}), usersAPI.getUser);
router.put('/update-profile', passport.authenticate('jwt', {session: false}), usersAPI.updateProfile);
router.post('/resend/verification-email', usersAPI.resendVerificationEmail);
router.patch('/verify-email', usersAPI.verifyEmail);
router.get('/forgot-password', usersAPI.forgotPassword);
router.patch('/reset-password', usersAPI.resetPassword);
router.put('/upload/profile-image', passport.authenticate('jwt', {session: false}), upload.single('image'), usersAPI.uploadProfileImage);


// export the router
module.exports = router;