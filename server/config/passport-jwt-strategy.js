// imports
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../model/user');

// setup configurations behavior for jwt
let opts = {
    jwtFromRequest:  ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'g-link'
}

// configure passport to use jwt-strategy
passport.use(new JWTStrategy(opts, async function(jwtPayLoad, done){
    try{
        // find the user
        const user = await User.findOne(jwtPayLoad._id);

        if(user){
            return done(null, user); // null -> no error, user -> authentication success
        }else{
            return done(null, false); // false -> authentication failed
        }
    }catch(err){
        console.log(`Error in finding user -- Passport: ${err}`);
        return done(err);
    }
}));

module.exports = passport;