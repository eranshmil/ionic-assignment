const { validationResult } = require('express-validator/check');

const Url = require('../models/url.model');

async function findUrl(url, hasValidationError, redirect) {
  if (hasValidationError || !redirect) {
    return await Url.findOne({ isDefault: true });
  }

  let urlObject = await Url.findOne({ value: url });

  if (!urlObject) {
    urlObject = await Url.create({ value: url });
  }

  return urlObject;
}

async function validateUrl(req, res) {
  const hasValidationError = !validationResult(req).isEmpty();
  const { url, redirect } = req.body;
  const urlObject = await findUrl(url, hasValidationError, redirect);

  if (!urlObject || !urlObject.value) {
    return res
      .status(422)
      .json({ errors: { url: 'Default url does not exists' } });
  }

  if (!redirect && hasValidationError) {
    return res.status(422).json({ errors: { url: 'Invalid url format' } });
  }

  const { value: redirectTo } = urlObject;

  res.json({ redirectTo });
}

module.exports = {
  validateUrl,
};
