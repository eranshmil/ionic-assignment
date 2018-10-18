const { validationResult } = require('express-validator/check');

const config = require('../../config/config');

function validateUrl(req, res) {
  let redirectTo = validationResult(req).isEmpty()
    ? req.body.url
    : config.defaultUrl || '';

  if (!req.body.redirect) {
    return res
      .status(422)
      .json({ errors: { redirect: 'You must check this box' } });
  }

  if (!redirectTo) {
    return res
      .status(422)
      .json({ errors: { url: 'Default url does not exists' } });
  }

  res.json({ redirectTo });
}

module.exports = {
  validateUrl,
};
