const InvestmentsMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:3004' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/investments-ms/investments`;

InvestmentsMSResource.create = (investment) => HTTPClient.post(`${BASE_URL}`, investment);

InvestmentsMSResource.getInvestmentsByProject = (projectId) => HTTPClient.get(`${BASE_URL}/project/${projectId}`);

InvestmentsMSResource.getInvestmentsByIdUser = (idUser) => HTTPClient.get(`${BASE_URL}/user/${idUser}`);

InvestmentsMSResource.getInvestmentsbyProjectAndUser = (idUser, idProject) => HTTPClient.get(`
${BASE_URL}/user/${idUser}/project/${idProject}`);

InvestmentsMSResource.getRewardsByProject = (projectId) => HTTPClient.get(`${BASE_URL}/rewards/${projectId}`);
