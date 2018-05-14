const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const PORT = process.env.PORT || 5000;

// connect to database
mongoose.connect(process.env.DB_URL);
// load all models
require('./models/user');
require('./services/passport');

// create express instance
const app = express();
// set cookie auth

const cookieConfig = {
    maxAge: 30 * 24 * 60 * 60 * 1000, // equal to 30 days.
    keys: [process.env.COOKIE_KEY] // sign the cookie.
}
app.use(cookieSession(cookieConfig));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send({text: 'Testing again'});
});

// routes go here
require('./handlers/auth')(app);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});
