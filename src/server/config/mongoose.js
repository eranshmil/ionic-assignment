const bluebird = require('bluebird');
const mongoose = require('mongoose');
const debug = require('debug')('assignment:server');

const config = require('./config');

// Use blue bird promises
mongoose.Promise = bluebird;

// Listen to error event and exit app
mongoose.connection.on('error', error => {
  debug(`Mongo connection error: ${error}`);
});

// Show extra mongo logs
mongoose.set('debug', true);

function connect() {
  mongoose.connect(
    config.mongoUri,
    {
      useNewUrlParser: true,
    }
  );

  return mongoose.connection;
}

module.exports = {
  connect,
};
