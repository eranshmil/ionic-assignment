const express = require('express');
const debug = require('debug')('assignment:server');

const app = express();
const api = require('./api/api');

const config = require('./config/config');

require('./config/middlewares')(app);

app.use('/api/v1', api);

app.use('/', (req, res) => {
  res.send('Hello there!');
});

app.listen(config.port, () => {
  debug('Listening on port ' + config.port);
});
