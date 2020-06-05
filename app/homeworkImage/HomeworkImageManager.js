const HomeworkImageManager = module.exports;
const ProjectMSResource = require('../resources/ProjectsMSResource');
const HomeworkImageMSResource = require('../resources/HomeworkImageResource');

HomeworkImageManager.deleteHomework = async (id, options = {}) => {
  const { logger } = options;

  const [homeworkImage] = await HomeworkImageMSResource.deleteHomeworkImage(id);

  logger.info(`Images homework details ${JSON.stringify(homeworkImage)}`);

  const { idHomework } = homeworkImage;

  const homework = await ProjectMSResource.deleteHomework(idHomework);

  logger.info(`Homework details ${JSON.stringify(homework)}`);

  return {
    homework,
    images: homeworkImage,
    message: 'Tarea eliminada',
  };
};
