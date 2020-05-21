const router = require('./routes/index');
const express = require('express');

const app = express();
app.use('/', router);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});