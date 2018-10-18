const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator/check');

const config = require('../config');

router.post('/', [check('url').isURL()], (req, res, next) => {
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
});

module.exports = router;
