const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/index')(app);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found 404</h1>');
});

app.listen(3000);
