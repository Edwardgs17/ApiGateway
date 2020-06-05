const express = require('express');

const router = express.Router();
const InvestmentsController = require('./InvestmentsController');

router.post('/', InvestmentsController.create);

router.get('/:idProject', InvestmentsController.getInvestmentFromAProject);

router.get('/investments/user/:idUser', InvestmentsController.getInvestmentsByIdUser);

router.get('/user/:idUser/projects', InvestmentsController.getProjectsInvestedByTheUser);

router.get('/investments/project/:idProject', InvestmentsController.getInvestmentsByIdProject);

router.get('/investments/rewards/:idRewards', InvestmentsController.getRewardsByProject);


module.exports = router;
