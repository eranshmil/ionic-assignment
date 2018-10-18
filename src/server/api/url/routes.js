const router = require('express').Router();
const { check } = require('express-validator/check');

const controller = require('./controller');

router.route('/').post([check('url').isURL()], controller.validateUrl);

module.exports = router;
