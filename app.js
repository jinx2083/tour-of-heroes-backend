const express = require('express');
const bodyParser = require('body-parser');
const catalogRouter = require('./routes/heroes');

const app = express();

app.use(bodyParser.json());

app.use('/heroes', catalogRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});

module.exports = app;
