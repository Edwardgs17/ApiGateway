const HomeworkImageController = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const HomeworkImageManager = require('../homeworkImage/HomeworkImageManager');

HomeworkImageController.deleteImageByIdHomework = (req, res, next) => {
  const logName = 'delete Image By Id Homework: ';
  const logger = req.log || console;
  const { params: { id } } = req;

  logger.info(`Starts HomeworkImageController.deleteImageByIdHomework: param ${JSON.stringify(id)}`);

  return HomeworkImageManager.deleteHomework(id, { logger, logName })
    .then((response) => res.send(response))
    .catch((error) => next(new BaseError(error.message)));
};
