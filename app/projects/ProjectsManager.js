const ProjectManager = module.exports;
const Promise = require('bluebird');
const UsersMSResource = require('../resources/UsersMSResource');
const ProjectMSResource = require('../resources/ProjectsMSResource');

ProjectManager.getProjectsByUsers = async (options = {}) => {
  const { logger } = options;
  const projects = await ProjectMSResource.getListProjectsWithImage();

  logger.info(`Projects details ${JSON.stringify(projects)}`);

  const projectsUser = await Promise.mapSeries(projects, async (project) => {
    const { idUser } = project;
    const dataProject = project;

    const users = await UsersMSResource.getUsersById(idUser).catch((error) => {
      logger.error(`Error in Users Detail: param id ${idUser} ::=> ${error.stack} `);

      return undefined;
    });

    logger.info(`Detail Users ${JSON.stringify(users)}`);

    dataProject.nameUser = users.fullname;
    dataProject.email = users.email;

    return dataProject;
  });

  logger.info(`Detail projectsUser ${JSON.stringify(projectsUser)}`);

  return projectsUser;
};

ProjectManager.getProjectsByUsersOne = async (options = {}) => {
  const { logger } = options;
  const projects = await ProjectMSResource.getProjectsByIdProcess();

  logger.info(`Projects details ${JSON.stringify(projects)}`);

  const projectsUser = await Promise.mapSeries(projects, async (project) => {
    const { idUser } = project;
    const dataProject = project;
    console.log(project);
    console.log('trae');

    console.log(idUser);


    const users = await UsersMSResource.getUsersById(idUser).catch((error) => {
      logger.error(`Error in Users Detail: param id ${idUser} ::=> ${error.stack} `);

      console.log(users);

      return undefined;
    });

    logger.info(`Detail Users ${JSON.stringify(users)}`);

    dataProject.nameUser = users.fullname;
    dataProject.email = users.email;


    return dataProject;
  });

  logger.info(`Detail projectsUser ${JSON.stringify(projectsUser)}`);

  return projectsUser;
};

ProjectManager.getProjectsByIdProcessTwo = async (options = {}) => {
  const { logger } = options;
  const projects = await ProjectMSResource.getProjectsByIdProcessTwo();

  logger.info(`Projects details ${JSON.stringify(projects)}`);

  const projectsUser = await Promise.mapSeries(projects, async (project) => {
    const { idUser } = project;
    const dataProject = project;

    const users = await UsersMSResource.getUsersById(idUser).catch((error) => {
      logger.error(`Error in Users Detail: param id ${idUser} ::=> ${error.stack} `);

      return undefined;
    });

    logger.info(`Detail Users ${JSON.stringify(users)}`);

    dataProject.nameUser = users.fullname;
    dataProject.email = users.email;

    return dataProject;
  });


  logger.info(`Detail projectsUser ${JSON.stringify(projectsUser)}`);

  return projectsUser;
};
