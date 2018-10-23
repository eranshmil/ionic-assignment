const express = require('express');
const debug = require('debug')('assignment:server');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const api = require('./api/api');

const config = require('./config/config');
const mongoose = require('./config/mongoose');

require('./config/middlewares')(app);
require('./socket/socket')(io);

app.use('/api/v1', api);

app.use('/', (req, res) => {
  res.send('Hello there!');
});

mongoose.connect();

server.listen(config.port, () => {
  debug('Listening on port ' + config.port);
});
