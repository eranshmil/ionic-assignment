const mongoose = require('mongoose');

const urlScheme = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },

  isDefault: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Url', urlScheme);
