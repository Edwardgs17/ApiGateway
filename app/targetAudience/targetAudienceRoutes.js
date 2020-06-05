const express = require('express');

const router = express.Router();
const targetAudienceController = require('./TargetAudienceController');

router.get('', targetAudienceController.getList);

module.exports = router;
