const UsersMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:3001' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/user-ms/users`;

UsersMSResource.getUsersById = (id) => HTTPClient.get(`${BASE_URL}/${id}/user`);

UsersMSResource.changePassword = (email, body) => HTTPClient.put(`${BASE_URL}/${email}/password`, body);

UsersMSResource.login = (body) => HTTPClient.post(`${BASE_URL}/login`, body);

UsersMSResource.signin = (body) => HTTPClient.post(`${BASE_URL}/signin`, body);

UsersMSResource.upDateUser = (email, body) => HTTPClient.put(`${BASE_URL}/${email}`, body);

UsersMSResource.findUserByEmail = (email) => HTTPClient.get(`${BASE_URL}/${email}`);

UsersMSResource.recoverPass = (email) => HTTPClient.put(`${BASE_URL}/recoverPass/${email}`);
