const router = require('express').Router();

router.use('/url', require('./url/routes'));

// db utils routes
router.use('/db', require('./db/routes'));

module.exports = router;
