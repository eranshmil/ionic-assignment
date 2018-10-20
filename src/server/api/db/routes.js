const router = require('express').Router();

const controller = require('./controller');

router.route('/').get(controller.seed);
router.route('/clear').get(controller.clear);

module.exports = router;
