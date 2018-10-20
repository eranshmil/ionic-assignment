const Url = require('../models/url.model');

function seed(req, res) {
  Url.collection.drop({});

  Url.create({
    value: 'https://www.google.com',
    isDefault: true,
  }).catch(error => res.send(`Failed to seed default url due to: ${error}`));

  res.send('DB has been seeded.');
}

function clear(req, res) {
  Url.collection.drop({});

  res.send('DB has been cleared.');
}

module.exports = {
  seed,
  clear,
};
