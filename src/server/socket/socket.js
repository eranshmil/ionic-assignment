const debug = require('debug')('assignment:server');

function socket(io) {
  io.on('connection', socket => {
    debug('user connected to socket');
  });
}

module.exports = socket;
