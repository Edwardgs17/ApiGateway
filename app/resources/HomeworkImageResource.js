const HomeworkImageResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:3002' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/project-ms`;

HomeworkImageResource.deleteHomeworkImage = (id) => HTTPClient.delete(`${BASE_URL}/image/homework/${id}`);
