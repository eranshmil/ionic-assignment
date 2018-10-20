const router = require('express').Router();

router.use('/url', require('./url/routes'));
router.use('/db', require('./db/routes'));

module.exports = router;
