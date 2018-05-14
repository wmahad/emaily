const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');


const deserializeUser = (id, done) => {
    User.findById(id).then(user => done(null, user));
}

// authentication callback.
const authUserCallback = (accessToken, refreshToken, profile, done) => {
    User.findOne({ profileId: profile.id })
    .then((user) => {
        if (!user) {
            new User({ profileId: profile.id })
            .save()
            .then(newUser => done(null, newUser));
        } else {
            done(null, user);
        }
    });
};

// google configs
const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    proxy: true,
};

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(deserializeUser);
passport.use(new GoogleStrategy(googleConfig, authUserCallback))
