const ProjectQualificationMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:3002' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/project-ms`;

ProjectQualificationMSResource.create = (payment) => HTTPClient.post(`${BASE_URL}/payment`, payment);

ProjectQualificationMSResource.success = (uri) => HTTPClient.get(uri);
