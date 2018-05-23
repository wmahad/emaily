const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;

// connect to database
mongoose.connect(process.env.DB_URL);
// load all models
require('./models/user');
require('./services/passport');

// create express instance
const router = express.Router();
const app = express();

// add body-parser
app.use(bodyParser.json());

// set cookie auth
const cookieConfig = {
    maxAge: 30 * 24 * 60 * 60 * 1000, // equal to 30 days.
    keys: [process.env.COOKIE_KEY] // sign the cookie.
}
app.use(cookieSession(cookieConfig));
app.use(passport.initialize());
app.use(passport.session());

// set logger
app.use(morgan('combined'));

// create virtual prefix to serve static files
const rootDir = path.join(path.dirname(path.basename(path.dirname(__dirname))), 'public');
app.use('/assets', express.static(rootDir));

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes go here
require('./handlers/auth')(router);
require('./handlers/billing')(router);

// index route - render a view.
app.use('/', router);
app.get('*', (req, res) => res.render('index', { NODE_ENV: process.env.NODE_ENV }));

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
