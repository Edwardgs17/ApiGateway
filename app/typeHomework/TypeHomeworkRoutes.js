const express = require('express');

const router = express.Router();
const typeHomeworkController = require('./TypeHomeworkController');

router.get('', typeHomeworkController.getTypeHomeworks);

module.exports = router;
