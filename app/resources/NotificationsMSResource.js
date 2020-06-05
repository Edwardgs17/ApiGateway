const NotificationsResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const { MICROSERVICE_URL = 'http://localhost:3003' } = process.env;

const BASE_URL = `${MICROSERVICE_URL}/api/notifications-ms`;


NotificationsResource.sendNotifications = (body) => HTTPClient.post(`${BASE_URL}/device/notify`, body);

NotificationsResource.createDeviceToken = (body) => HTTPClient.post(`${BASE_URL}/device`, body);

NotificationsResource.updateDeviceToken = (id, body) => HTTPClient.put(`${BASE_URL}/device/${id}`, body);

NotificationsResource.getToken = (id) => HTTPClient.get(`${BASE_URL}/devices/${id}`);
