const express = require('express');

const router = express.Router();
const NotificationsController = require('../Notifications/NotificationsController');
// const Token = require('../utils/Token');


router.post('/device/notify', NotificationsController.sendNotifications);
router.post('/device', NotificationsController.createDeviceToken);
router.put('/device/:id', NotificationsController.updateDeviceToken);
router.get('/devices/:id', NotificationsController.getToken);


module.exports = router;
