const UsersController = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const UsersMSResource = require('../resources/UsersMSResource');
const UsersManager = require('./UsersManager');

UsersController.getUsers = (req, res, next) => {
  const logName = 'Get Users';
  const logger = req.log || console;
  const { id } = req.params;
  logger.info(`Starts UsersController.getUsers: params ${JSON.stringify(id)}`);

  return UsersMSResource.getUsersById(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

UsersController.login = (req, res, next) => {
  const logName = 'login';
  const logger = req.log || console;
  const { body } = req;
  logger.info(`Starts usersController.login: params ${JSON.stringify(body)}`);

  return UsersManager.login(body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

UsersController.signin = (req, res, next) => {
  console.log('ok');
  const { body } = req;

  return UsersMSResource.signin(body)
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.messsage)));
};

UsersController.changePassword = (req, res, next) => {
  const logName = 'Change Password: ';
  const logger = req.log || console;
  const { params: { email }, body } = req;

  logger.info(`Starts UsersController.changePassword: params ${email}`);

  return UsersMSResource.changePassword(email, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

UsersController.upDateUser = (req, res, next) => {
  const logName = 'GetDeviceMeasures: ';
  const logger = req.log || console;
  const { params: { email }, body } = req;

  logger.info(`Starts UsersController.upDateUser: params ${email}`);
  logger.info(`Starts UsersController.upDateUser: body ${JSON.stringify(body)}`);

  return UsersMSResource.upDateUser(email, body, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

UsersController.findUserByEmail = (req, res, next) => {
  const logName = 'GetDeviceMeasures: ';
  const logger = req.log || console;
  const { params: { email } } = req;

  logger.info(`Starts UsersController.findUserByEmail: params ${email}`);

  return UsersMSResource.findUserByEmail(email, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};

UsersController.recoverPass = (req, res, next) => {
  const logName = 'GetDeviceMeasures: ';
  const logger = req.log || console;
  const { params: { email } } = req;

  logger.info(`Starts UsersController.recoverPass: params ${email}`);
  logger.info(`Starts UsersController.recoverPass: body ${JSON.stringify(email)}`);

  return UsersMSResource.recoverPass(email, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};
