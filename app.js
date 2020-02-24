const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/index')(app);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found 404</h1>');
});

app.listen(3000);
