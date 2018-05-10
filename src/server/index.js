const express = require('express');
const passport = require('./services/passport');

const PORT = process.env.PORT || 5000;

// create express instance
const app = express();

app.get('/', (req, res) => {
    res.send({text: 'Testing again'});
});

// routes go here
require('./handlers/auth')(app, passport);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});
