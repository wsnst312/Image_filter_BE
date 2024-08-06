const express = require('express');
const router = express.Router();

router.use('/file', require('./file'))

module.exports = router;
