const { validationResult } = require('express-validator/check');

const Url = require('../models/url.model');

async function findUrl(url, validationResult) {
  if (!validationResult.isEmpty()) {
    return await Url.findOne({ isDefault: true });
  }

  let urlObject = await Url.findOne({ value: url });

  if (!urlObject) {
    urlObject = await Url.create({ value: url });
  }

  return urlObject;
}

async function validateUrl(req, res) {
  const urlObject = await findUrl(req.body.url, validationResult(req));

  if (!req.body.redirect) {
    return res
      .status(422)
      .json({ errors: { redirect: 'You must check this box' } });
  }

  if (!urlObject || !urlObject.value) {
    return res
      .status(422)
      .json({ errors: { url: 'Default url does not exists' } });
  }

  res.json({ redirectTo: urlObject.value });
}

module.exports = {
  validateUrl,
};
