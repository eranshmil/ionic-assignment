const debug = require('debug')('assignment:server');

let interval;

function sendUrlEvent(socket, data) {
  let sendNewUrl = true;
  let [oldUrl, newUrl] = data;

  interval = setInterval(() => {
    const urlToSend = sendNewUrl ? newUrl : oldUrl;

    socket.emit('GET_URL', urlToSend);

    sendNewUrl = !sendNewUrl;
  }, 5000);
}

function disconnectEvent() {
  debug('user disconnected from socket');

  if (interval) {
    clearInterval(interval);
  }
}

function urlEvents(socket) {
  socket.on('SEND_URL', data => sendUrlEvent(socket, data));
  socket.on('disconnect', () => disconnectEvent());
}

module.exports = urlEvents;
