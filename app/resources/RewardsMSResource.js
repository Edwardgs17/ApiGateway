const RewardsMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:3002' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/project-ms`;

RewardsMSResource.getRewardsForId = (idRewards) => HTTPClient.get(`${BASE_URL}/rewards/${idRewards}`);
