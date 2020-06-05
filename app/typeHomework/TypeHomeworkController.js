const TypeHomeworkController = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const TypeHomeworkMSResource = require('../resources/TypeHomeworkMSResource');

TypeHomeworkController.getTypeHomeworks = (req, res, next) => TypeHomeworkMSResource.getTypeHomeworks()
  .then((response) => res.send(response))
  .catch((error) => next(new BaseError(error.message)));
