const NotificationsController = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const NotificationsMSResource = require('../resources/NotificationsMSResource');


NotificationsController.sendNotifications = (req, res, next) => {
  const logName = 'sendNotifications: ';
  const logger = req.log || console;
  const { body } = req;
  console.log(req.body);


  logger.info(`Starts NotificationsController.sendNotifications: body ${JSON.stringify(body)}`);

  return NotificationsMSResource.sendNotifications(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

NotificationsController.createDeviceToken = (req, res, next) => {
  const logName = 'createDeviceToken: ';
  const logger = req.log || console;
  const { body } = req;
  console.log(body);

  logger.info(`Starts createDeviceToken.create: body ${JSON.stringify(body)}`);
  console.log('createDeviceToken.create:');

  const device = body;

  return NotificationsMSResource.createDeviceToken(device, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

NotificationsController.updateDeviceToken = (req, res, next) => {
  const logName = 'updateDeviceToken: ';
  const logger = req.log || console;
  const { params: { id }, body } = req;

  logger.info(`Starts NotificationsController.updateDeviceToken: params ${id}`);
  logger.info(`Starts NotificationsController.updateDeviceToken: body ${JSON.stringify(body)}`);

  return NotificationsMSResource.updateDeviceToken(id, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

NotificationsController.getToken = (req, res, next) => {
  const logName = 'getTokenDevice: ';
  const logger = req.log || console;
  const { params: { id } } = req;

  logger.info(`Starts ProjectController.getTokenDevice: params ${JSON.stringify(id)}`);

  return NotificationsMSResource.getToken(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};
