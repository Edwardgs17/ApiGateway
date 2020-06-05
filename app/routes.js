const express = require('express');

const router = express.Router();

const usersRoutes = require('./users/usersRoutes');
const projectsRoutes = require('./projects/projectsRoutes');
const PaymentsRoutes = require('./payments/PaymentsRoutes');
const targetAudienceRoutes = require('./targetAudience/targetAudienceRoutes');
const investmentsRoutes = require('./investments/InvestmentsRoutes');
const typeHomeworkRoutes = require('./typeHomework/TypeHomeworkRoutes');
const homeworkImageRoutes = require('./homeworkImage/HomeworkImageRoutes');
const notificationsRoutes = require('./Notifications/NotificationsRoutes');

router.use('/users', usersRoutes);
router.use('/projects', projectsRoutes);
router.use('/payments', PaymentsRoutes);
router.use('/targetAudience', targetAudienceRoutes);
router.use('/investments', investmentsRoutes);
router.use('/typeHomeworks', typeHomeworkRoutes);
router.use('/homeworkImage', homeworkImageRoutes);
router.use('/notifications', notificationsRoutes);

module.exports = router;
