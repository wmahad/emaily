const express = require('express');
const PORT = process.env.PORT || 5000;

// create express instance
const app = express();

app.get('/', (req, res) => {
    res.send({'text': 'we here baby'});
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
});
