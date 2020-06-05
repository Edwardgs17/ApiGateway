const InvestmentsController = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const InvestmentsMSResource = require('../resources/InvestmentsMSResource');
const InvestmentManager = require('../investments/InvestmentsManager');

InvestmentsController.create = (req, res, next) => {
  const logName = 'create: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts InvestmentsController.create: body ${JSON.stringify(body)}`);

  return InvestmentsMSResource.create(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

InvestmentsController.getInvestmentFromAProject = (req, res, next) => {
  const logName = 'getInvestmentFromAProject: ';
  const logger = req.log || console;
  const { params: { idProject } } = req;

  logger.info(`Starts InvestmentsController.getInvestmentFromAProject: params ${JSON.stringify(idProject)}`);

  return InvestmentsMSResource.getInvestmentsByProject(idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

InvestmentsController.getInvestmentsByIdUser = (req, res, next) => {
  const logName = 'getinvestmentsbyiduser';
  const logger = req.log || console;
  const { params: { idUser } } = req;


  logger.info(`Starts ProjectController.getInvestmentsByidUser: params ${JSON.stringify(idUser)}`);

  return InvestmentManager.getInvestmentsByIdUser(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

InvestmentsController.getProjectsInvestedByTheUser = (req, res, next) => {
  const logName = 'Get Projects Where And Invested : ';
  const logger = req.log || console;
  const { params: { idUser } } = req;


  logger.info(`Start InvestmentsController.getProjectsWhereAndInvested ${idUser}`);

  return InvestmentManager.getProjectsInvestedByTheUser(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

InvestmentsController.getInvestmentsByIdProject = (req, res, next) => {
  const logName = 'getinvestmentsbyidProject';
  const logger = req.log || console;

  const { params: { idProject } } = req;


  logger.info(`Starts ProjectController.getInvestmentsByidProject: params ${JSON.stringify(idProject)}`);

  return InvestmentManager.getInvestmentsByIdProject(idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};


InvestmentsController.getRewardsByProject = (req, res, next) => {
  const logName = 'getRewardsByProject';
  const logger = req.log || console;
  const { params: { idRewards } } = req;


  logger.info(`Starts RewardsController.getRewardsByProject: params ${JSON.stringify(idRewards)}`);

  return InvestmentsMSResource.getRewardsByProject(idRewards, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};
