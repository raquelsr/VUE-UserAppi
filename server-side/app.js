const router = require('./routes/index');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

app.use('/', router);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});