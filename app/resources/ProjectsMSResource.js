const ProjectsMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:3002' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/project-ms`;

ProjectsMSResource.getListProjectsWithImage = () => HTTPClient.get(`${BASE_URL}/projects`);

ProjectsMSResource.getListProjectsByIdUser = (id) => HTTPClient.get(`${BASE_URL}/projects/users/${id}`);

ProjectsMSResource.createProject = (body) => HTTPClient.post(`${BASE_URL}/projects`, body);

ProjectsMSResource.createHomework = (body) => HTTPClient.post(`${BASE_URL}/projects/homework`, body);

ProjectsMSResource.createReward = (body) => HTTPClient.post(`${BASE_URL}/rewards`, body);

ProjectsMSResource.saveReward = (body) => HTTPClient.post(`${BASE_URL}/reward/image`, body);

ProjectsMSResource.updateProjectToRevision = (id) => HTTPClient.put(`${BASE_URL}/process/project/${id}`);

ProjectsMSResource.updateProjectQualificationAverage = (id, body) => HTTPClient
  .put(`${BASE_URL}/project/qualificationAverage/${id}`, body);

ProjectsMSResource.updateProjectToEdition = (id, body) => HTTPClient
  .put(`${BASE_URL}/process/edition/project/${id}`, body);

ProjectsMSResource.updateProjectToRevision = (id, body) => HTTPClient
  .put(`${BASE_URL}/process/project/${id}`, body);

ProjectsMSResource.updateProjectToAproved = (id, body) => HTTPClient
  .put(`${BASE_URL}/process/aproved/project/${id}`, body);

ProjectsMSResource.updateProjectToCancel = (id, body) => HTTPClient
  .put(`${BASE_URL}/process/cancel/project/${id}`, body);

ProjectsMSResource.updateHomeworkQualificationAverage = (id, body) => HTTPClient
  .put(`${BASE_URL}/homework/qualification/${id}`, body);

ProjectsMSResource.updateHomeworkToEdition = (id, body) => HTTPClient
  .put(`${BASE_URL}/homework/process/edition/${id}`, body);

ProjectsMSResource.updateHomeworkToRevision = (id, body) => HTTPClient
  .put(`${BASE_URL}/homework/process/revision/${id}`, body);

ProjectsMSResource.updateHomeworkToAproved = (id, body) => HTTPClient
  .put(`${BASE_URL}/homework/process/aproved/${id}`, body);

ProjectsMSResource.updateDeliverieToEdition = (id, body) => HTTPClient
  .put(`${BASE_URL}/deliverie/edition/${id}`, body);

ProjectsMSResource.updateDeliverieToRevision = (id, body) => HTTPClient
  .put(`${BASE_URL}/deliverie/revision/${id}`, body);

ProjectsMSResource.updateDeliverieToAproved = (id, body) => HTTPClient
  .put(`${BASE_URL}/deliverie/aproved/${id}`, body);

ProjectsMSResource.updateDeliverieToCancel = (id, body) => HTTPClient
  .put(`${BASE_URL}/deliverie/cancel/${id}`, body);

ProjectsMSResource.updateDeliverieQualificationAverage = (id, body) => HTTPClient
  .put(`${BASE_URL}/deliverie/qualification/${id}`, body);

ProjectsMSResource.updateImageHomeworkByIdHomework = (id, body) => HTTPClient
  .put(`${BASE_URL}/image/homework/${id}`, body);

ProjectsMSResource.updateHomework = (id, body) => HTTPClient.put(`${BASE_URL}/homework/${id}`, body);

ProjectsMSResource.deleteHomework = (id) => HTTPClient.delete(`${BASE_URL}/homework/${id}`);

ProjectsMSResource.saveImageOfProject = (body) => HTTPClient.post(`${BASE_URL}/projects/image`, body);

ProjectsMSResource.saveHomework = (body) => HTTPClient.post(`${BASE_URL}/homework/image`, body);

ProjectsMSResource.getImageByIdProjects = (idUser) => HTTPClient.get(`${BASE_URL}/projects/users/${idUser}`);

ProjectsMSResource.getRewardsByIdProject = (idProject) => HTTPClient.get(`${BASE_URL}/projects/${idProject}/rewards`);

ProjectsMSResource.getOneProject = (idProject) => HTTPClient.get(`${BASE_URL}/projects/${idProject}`);

ProjectsMSResource.getProjectsByHomework = (idProject) => HTTPClient.get(`${BASE_URL}/projects/${idProject}/homework`);

ProjectsMSResource.updateProjectById = (projectId, body) => HTTPClient.put(`${BASE_URL}/projects/${projectId}`, body);

ProjectsMSResource.deleteProjectById = (projectId) => HTTPClient.delete(`${BASE_URL}/projects/${projectId}`);

ProjectsMSResource.getRewardsById = (idRewards) => HTTPClient.get(`${BASE_URL}/rewards/${idRewards}`);

ProjectsMSResource.getProjectsByIdProcess = () => HTTPClient.get(`${BASE_URL}/project`);

ProjectsMSResource.getProjectsByIdProcessTwo = () => HTTPClient.get(`${BASE_URL}/projectss`);
ProjectsMSResource.createProjectQualification = (body) => HTTPClient.post(`${BASE_URL}/projectQualification`, body);

ProjectsMSResource.getProjectQualificationByUserAndProject = (idUser, idProject) => HTTPClient.get(`
${BASE_URL}/projectQualification/${idUser}/${idProject}`);

ProjectsMSResource.updateProjectQualification = (id, body) => HTTPClient.put(
  `${BASE_URL}/projectQualification/${id}`, body,
);

ProjectsMSResource.getProjectQualificationByProject = (idProject) => HTTPClient.get(`
${BASE_URL}/projectQualification/${idProject}`);


ProjectsMSResource.createHomeworkQualification = (body) => HTTPClient.post(`${BASE_URL}/homeworkQualification`, body);
ProjectsMSResource.getHomeworkQualificationByUserAndHomework = (idUser, idHomework) => HTTPClient.get(`
${BASE_URL}/homeworkQualification/${idUser}/${idHomework}`);
ProjectsMSResource.updateHomeworkQualification = (id, body) => HTTPClient.put(
  `${BASE_URL}/homeworkQualification/${id}`, body,
);
ProjectsMSResource.getHomeworkQualificationByHomework = (idHomework) => HTTPClient.get(`
${BASE_URL}/homeworkQualification/${idHomework}`);


ProjectsMSResource.getHomeworksByIdProjectOne = (idProject) => HTTPClient.get(
  `${BASE_URL}/project/${idProject}/homework`,
);

ProjectsMSResource.getHomeworksByIdProjectTwo = (idProject) => HTTPClient.get(
  `${BASE_URL}/projectss/${idProject}/homework`,
);

ProjectsMSResource.getHomeworksByIdProjectThird = (idProject) => HTTPClient.get(
  `${BASE_URL}/projectsss/${idProject}/homework`,
);

ProjectsMSResource.getDeliverieByIdHomeworkByIdProcess = (idHomework, process) => HTTPClient.get(
  `${BASE_URL}/projects/${idHomework}/homeworks/deliveries/${process}`,
);

ProjectsMSResource.createDeliverie = (body) => HTTPClient.post(
  `${BASE_URL}/deliveries`, body,
);

ProjectsMSResource.saveImageDeliverie = (body) => HTTPClient.post(
  `${BASE_URL}/deliveries/image`, body,
);

ProjectsMSResource.createDeliveriesQualification = (body) => HTTPClient
  .post(`${BASE_URL}/deliveriesQualification`, body);
ProjectsMSResource.getDeliveriesQualificationByUserAndIdDeliveries = (idUser, idDeliverie) => HTTPClient.get(`
${BASE_URL}/deliveriesQualification/${idUser}/${idDeliverie}`);
ProjectsMSResource.updateDeliveriesQualification = (id, body) => HTTPClient.put(
  `${BASE_URL}/deliveriesQualification/${id}`, body,
);
ProjectsMSResource.getDeliveriesQualificationByIdDeliveries = (idDeliverie) => HTTPClient.get(`
${BASE_URL}/deliveriesQualification/${idDeliverie}`);
