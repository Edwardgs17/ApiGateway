const ProjectsController = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const ProjectManager = require('../projects/ProjectsManager');
const ProjectsMSResource = require('../resources/ProjectsMSResource');

ProjectsController.getProjectsWithImage = (req, res, next) => {
  const logName = 'Get List Projects With Image : ';
  const logger = req.log || console;

  logger.info('Start ProjectController.getListProjectsWithImage');

  return ProjectsMSResource.getListProjectsWithImage({ logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getProjectsByUsers = (req, res, next) => {
  const logName = 'Get Projects By Users : ';
  const logger = req.log || console;

  logger.info('Start ProjectController.getProjectsByUsers');

  return ProjectManager.getProjectsByUsers({ logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateProjectToEdition = (req, res, next) => {
  const logName = 'updateProjectToEdition: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateProjectToEdition: params ${id}`);
  logger.info(`Starts ProjectController.updateProjectToEdition: body ${body}`);

  return ProjectsMSResource.updateProjectToEdition(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateProjectToRevision = (req, res, next) => {
  const logName = 'updateProjectToRevision: ';
  const logger = req.log || console;
  const { params: { id, body } } = req;

  logger.info(`Starts ProjectController.updateProjectToRevision: params ${id}`);
  logger.info(`Starts ProjectController.updateProjectToRevision: body ${body}`);

  return ProjectsMSResource.updateProjectToRevision(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateProjectToAproved = (req, res, next) => {
  const logName = 'updateProjectToAproved: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateProjectToAproved: params ${id}`);
  logger.info(`Starts ProjectController.updateProjectToAproved: body ${body}`);

  return ProjectsMSResource.updateProjectToAproved(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateProjectToCancel = (req, res, next) => {
  const logName = 'updateProjectToCancel: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateProjectToCancel: params ${id}`);
  logger.info(`Starts ProjectController.updateProjectToCancel: body ${body}`);

  return ProjectsMSResource.updateProjectToCancel(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateProjectQualificationAverage = (req, res, next) => {
  const logName = 'updateProjectQualificationAverage: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateProjectQualificationAverage: params ${id}`);
  logger.info(`Starts ProjectController.updateProjectQualificationAverage: body ${body}`);

  return ProjectsMSResource.updateProjectQualificationAverage(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateHomeworkToEdition = (req, res, next) => {
  const logName = 'updateHomeworkToEdition: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateHomeworkToEdition: params ${id}`);
  logger.info(`Starts ProjectController.updateHomeworkToEdition: body ${body}`);

  return ProjectsMSResource.updateHomeworkToEdition(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateHomeworkToRevision = (req, res, next) => {
  const logName = 'updateHomeworkToRevision: ';
  const logger = req.log || console;
  const { params: { id, body } } = req;

  logger.info(`Starts ProjectController.updateHomeworkToRevision: params ${id}`);
  logger.info(`Starts ProjectController.updateHomeworkToRevision: body ${body}`);

  return ProjectsMSResource.updateHomeworkToRevision(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateHomeworkToAproved = (req, res, next) => {
  const logName = 'updateHomeworkToAproved: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateHomeworkToAproved: params ${id}`);
  logger.info(`Starts ProjectController.updateHomeworkToAproved: body ${body}`);

  return ProjectsMSResource.updateHomeworkToAproved(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateHomeworkQualificationAverage = (req, res, next) => {
  const logName = 'updateHomeworkQualificationAverage: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateHomeworkQualificationAverage: params ${id}`);
  logger.info(`Starts ProjectController.updateHomeworkQualificationAverage: body ${body}`);

  return ProjectsMSResource.updateHomeworkQualificationAverage(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateDeliverieToEdition = (req, res, next) => {
  const logName = 'updateDeliverieToEdition: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateDeliverieToEdition: params ${id}`);
  logger.info(`Starts ProjectController.updateDeliverieToEdition: body ${body}`);

  return ProjectsMSResource.updateDeliverieToEdition(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateDeliverieToRevision = (req, res, next) => {
  const logName = 'updateDeliverieToRevision: ';
  const logger = req.log || console;
  const { params: { id, body } } = req;

  logger.info(`Starts ProjectController.updateDeliverieToRevision: params ${id}`);
  logger.info(`Starts ProjectController.updateDeliverieToRevision: body ${body}`);

  return ProjectsMSResource.updateDeliverieToRevision(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateDeliverieToAproved = (req, res, next) => {
  const logName = 'updateDeliverieToAproved: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateDeliverieToAproved: params ${id}`);
  logger.info(`Starts ProjectController.updateDeliverieToAproved: body ${body}`);

  return ProjectsMSResource.updateDeliverieToAproved(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateDeliverieToCancel = (req, res, next) => {
  const logName = 'updateDeliverieToCancel: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateDeliverieToCancel: params ${id}`);
  logger.info(`Starts ProjectController.updateDeliverieToCancel: body ${body}`);

  return ProjectsMSResource.updateDeliverieToCancel(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateDeliverieQualificationAverage = (req, res, next) => {
  const logName = 'updateDeliverieQualificationAverage: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateDeliverieQualificationAverage: params ${id}`);
  logger.info(`Starts ProjectController.updateDeliverieQualificationAverage: body ${body}`);

  return ProjectsMSResource.updateDeliverieQualificationAverage(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.create = (req, res, next) => {
  const logName = 'Create Project: ';
  const logger = req.log || console;
  const { body } = req;
  console.log(body);

  logger.info(`Starts ProjectController.create: body ${JSON.stringify(body)}`);
  console.log('ProjectController.create:');

  const project = body;

  return ProjectsMSResource.createProject(project, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.saveImage = (req, res, next) => {
  const logName = 'Save Image Of Project: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.saveImage: body ${JSON.stringify(body)}`);

  const projectImage = body;


  return ProjectsMSResource.saveImageOfProject(projectImage, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.saveHomework = (req, res, next) => {
  const logName = 'Save Image Of Project: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.saveHomework: body ${JSON.stringify(body)}`);

  const projectImage = body;


  return ProjectsMSResource.saveHomework(projectImage, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getImageByIdProjects = (req, res, next) => {
  const logName = 'get Image By IdProjects: ';
  const logger = req.log || console;
  const { params: { idUser } } = req;


  logger.info(`Start ProjectController.getImageByIdProjects: params ${idUser}`);

  return ProjectsMSResource.getImageByIdProjects(idUser, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getProjectOne = (req, res, next) => {
  const logName = 'getProjectOne: ';
  const logger = req.log || console;
  const { params: { idProject } } = req;

  logger.info(`Starts ProjectController.getProjectOne: params ${JSON.stringify(idProject)}`);

  return ProjectsMSResource.getOneProject(idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getHomeworkFromAProject = (req, res, next) => {
  const logName = 'getTasksFromAProject: ';
  const logger = req.log || console;
  const { params: { idProject } } = req;

  logger.info(`Starts ProjectController.getTasksFromAProject: params ${JSON.stringify(idProject)}`);

  return ProjectsMSResource.getProjectsByHomework(idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getRewardsFromAProject = (req, res, next) => {
  const logName = 'getRewardsFromAProject: ';
  const logger = req.log || console;
  const { params: { idProject } } = req;

  logger.info(`Starts ProjectController.getRewardsFromAProject: params ${JSON.stringify(idProject)}`);

  return ProjectsMSResource.getRewardsByIdProject(idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.createHomework = (req, res, next) => {
  const logName = 'createHomework: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.createHomework: params ${JSON.stringify(body)}`);

  return ProjectsMSResource.createHomework(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateProjectById = (req, res, next) => {
  const logName = 'updateProjectById';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updatesProjectById: params ${id}`);
  logger.info(`Starts ProjectController.updateProjectById: params ${JSON.stringify(body)}`);
  console.log(body);

  return ProjectsMSResource.updateProjectById(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.deleteProjectById = (req, res, next) => {
  const logName = 'deleteProjectById';
  const logger = req.log || console;
  const { params: { id } } = req;

  logger.info(`Starts ProjectController.deleteProjectById: params ${id}`);

  return ProjectsMSResource.deleteProjectById(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};


ProjectsController.getHomeworksByIdProject = (req, res, next) => {
  const logName = 'get Homeworks By IdProject: ';
  const logger = req.log || console;
  const { params: { id } } = req;


  logger.info(`Start ProjectController.getHomeworksByIdProject: params ${id}`);

  return ProjectsMSResource.getProjectsByHomework(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getHomeworksByIdProjectOne = (req, res, next) => {
  const logName = 'getHomeworksByIdProjectOne: ';
  const logger = req.log || console;
  const { params: { id } } = req;


  logger.info(`Start ProjectController.getHomeworksByIdProjectOne: params ${id}`);

  return ProjectsMSResource.getHomeworksByIdProjectOne(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getHomeworksByIdProjectTwo = (req, res, next) => {
  const logName = 'getHomeworksByIdProjectTwo: ';
  const logger = req.log || console;
  const { params: { id } } = req;


  logger.info(`Start ProjectController.getHomeworksByIdProjectTwo: params ${id}`);

  return ProjectsMSResource.getHomeworksByIdProjectTwo(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getHomeworksByIdProjectThird = (req, res, next) => {
  const logName = 'getHomeworksByIdProjectThird: ';
  const logger = req.log || console;
  const { params: { id } } = req;


  logger.info(`Start ProjectController.getHomeworksByIdProjectThird: params ${id}`);

  return ProjectsMSResource.getHomeworksByIdProjectThird(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateImageHomeworkByIdHomework = (req, res, next) => {
  const logName = 'update Homework Image By Id Homework: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateImageHomeworkByIdHomework: param ${JSON.stringify(id)}`);
  logger.info(`Starts ProjectController.updateImageHomeworkByIdHomework: body ${JSON.stringify(body)}`);

  return ProjectsMSResource.updateImageHomeworkByIdHomework(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateHomework = (req, res, next) => {
  const logName = 'update Homework: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateHomework: params ${JSON.stringify(id)}`);
  logger.info(`Starts ProjectController.updateHomework: body ${JSON.stringify(body)}`);

  return ProjectsMSResource.updateHomework(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.deleteHomework = (req, res, next) => {
  const logName = 'delete Homework: ';
  const logger = req.log || console;
  const { params: { id } } = req;

  logger.info(`Starts ProjectController.deleteHomework: param ${JSON.stringify(id)}`);

  return ProjectsMSResource.deleteHomework(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};
ProjectsController.getProjectsByIdProcess = (req, res, next) => {
  const logName = 'getProjectsByIdProcess: ';
  const logger = req.log || console;

  logger.info('Start ProjectController.getProjectsByIdProcess');

  return ProjectManager.getProjectsByUsersOne({ logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.createReward = (req, res, next) => {
  const logName = 'createReward: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.createReward: params ${JSON.stringify(body)}`);

  return ProjectsMSResource.createReward(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.saveReward = (req, res, next) => {
  const logName = 'Save Image For Reward: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.saveReward: body ${JSON.stringify(body)}`);

  const projectImage = body;


  return ProjectsMSResource.saveReward(projectImage, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.createProjectQualification = (req, res, next) => {
  const logName = 'Create Project Qualification: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.createProjectQualification: param ${JSON.stringify(body)}`);

  return ProjectsMSResource.createProjectQualification(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getProjectQualificationByUserAndProject = (req, res, next) => {
  const logName = 'get project qualification by user and project: ';
  const logger = req.log || console;
  const { params: { idUser } } = req;
  const { params: { idProject } } = req;


  logger.info(`Start ProjectController.getProjectQualificationByUserAndProject: params ${idUser}, ${idProject}`);

  return ProjectsMSResource.getProjectQualificationByUserAndProject(idUser, idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};


ProjectsController.updateProjectQualification = (req, res, next) => {
  const logName = 'updateProjectQualification';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateProjectQualification: params ${id}`);
  logger.info(`Starts ProjectController.updateProjectQualification: params ${JSON.stringify(body)}`);

  return ProjectsMSResource.updateProjectQualification(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getProjectQualificationByProject = (req, res, next) => {
  const logName = 'get project qualification by project: ';
  const logger = req.log || console;
  const { params: { idProject } } = req;


  logger.info(`Start ProjectController.getProjectQualificationByProject: params ${idProject}`);

  return ProjectsMSResource.getProjectQualificationByProject(idProject, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.createHomeworkQualification = (req, res, next) => {
  const logName = 'Create Homework Qualification: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.createHomeworkQualification: param ${JSON.stringify(body)}`);

  return ProjectsMSResource.createHomeworkQualification(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getHomeworkQualificationByUserAndHomework = (req, res, next) => {
  const logName = 'get homework qualification by iduser and idhomewor: ';
  const logger = req.log || console;
  const { params: { idUser } } = req;
  const { params: { idHomework } } = req;


  logger.info(`Start ProjectController.getHomeworkQualificationByUserAndHomework: params ${idUser}, ${idHomework}`);

  return ProjectsMSResource.getHomeworkQualificationByUserAndHomework(idUser, idHomework, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.updateHomeworkQualification = (req, res, next) => {
  const logName = 'updateHomeworkQualification';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateHomeworkQualification: params ${id}`);
  logger.info(`Starts ProjectController.updateHomeworkQualification: params ${JSON.stringify(body)}`);

  return ProjectsMSResource.updateHomeworkQualification(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getProjectsByIdProcessTwo = (req, res, next) => {
  const logName = 'getProjectsByIdProcessTwo: ';
  const logger = req.log || console;

  logger.info('Start ProjectController.getProjectsByIdProcessTwo');

  return ProjectManager.getProjectsByIdProcessTwo({ logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getHomeworkQualificationByHomework = (req, res, next) => {
  const logName = 'get homework qualification by idhomework: ';
  const logger = req.log || console;
  const { params: { idHomework } } = req;


  logger.info(`Start ProjectController.getHomeworkQualificationByHomework: params ${idHomework}`);

  return ProjectsMSResource.getHomeworkQualificationByHomework(idHomework, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getDeliverieByIdHomeworkByIdProcess = (req, res, next) => {
  const logName = 'getDeliverieByIdHomeworkByIdProcess: ';
  const logger = req.log || console;
  const { params: { idHomework, process } } = req;


  logger.info(`Start ProjectController.getDeliverieByIdHomeworkByIdProcess: params ${idHomework}`);

  logger.info(`Start ProjectController.getDeliverieByIdHomeworkByIdProcess: params ${process}`);

  return ProjectsMSResource.getDeliverieByIdHomeworkByIdProcess(idHomework, process, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.createDeliverie = (req, res, next) => {
  const logName = 'createDeliverie: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.createDeliverie: param ${JSON.stringify(body)}`);

  return ProjectsMSResource.createDeliverie(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.saveImageDeliverie = (req, res, next) => {
  const logName = 'saveImageDeliverie: ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.saveImageDeliverie: param ${JSON.stringify(body)}`);

  return ProjectsMSResource.saveImageDeliverie(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.createDeliveriesQualification = (req, res, next) => {
  const logName = 'Create Deliveries Qualification : ';
  const logger = req.log || console;
  const { body } = req;

  logger.info(`Starts ProjectController.createDeliveriesQualification: param ${JSON.stringify(body)}`);

  return ProjectsMSResource.createDeliveriesQualification(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getDeliveriesQualificationByUserAndIdDeliveries = (req, res, next) => {
  const logName = 'get Deliveries qualification by user and IdDeliveries: ';
  const logger = req.log || console;
  const { params: { idUser } } = req;
  const { params: { idDeliveries } } = req;


  logger.info(`Start ProjectController.getDeliveriesQualificationByUserAndIdDeliveries: params
   ${idUser}, ${idDeliveries}`);

  return ProjectsMSResource.getDeliveriesQualificationByUserAndIdDeliveries(idUser, idDeliveries, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};


ProjectsController.updateDeliveriesQualification = (req, res, next) => {
  const logName = 'updateDeliveriesQualification';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts ProjectController.updateDeliveriesQualification: params ${id}`);
  logger.info(`Starts ProjectController.updateDeliveriesQualification: params ${JSON.stringify(body)}`);

  return ProjectsMSResource.updateDeliveriesQualification(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

ProjectsController.getDeliveriesQualificationByIdDeliveries = (req, res, next) => {
  const logName = 'get Deliveries Qualification By IdDeliveries: ';
  const logger = req.log || console;
  const { params: { idDeliveries } } = req;


  logger.info(`Start ProjectController.getDeliveriesQualificationByIdDeliveries: params ${idDeliveries}`);

  return ProjectsMSResource.getDeliveriesQualificationByIdDeliveries(idDeliveries, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};
