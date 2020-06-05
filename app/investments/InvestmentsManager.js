const InvestmentsManager = module.exports;
const Promise = require('bluebird');
const ProjectMSResource = require('../resources/ProjectsMSResource');
const InvestmentsMSResource = require('../resources/InvestmentsMSResource');
const RewardsMSResource = require('../resources/RewardsMSResource');
const UsersMSResource = require('../resources/UsersMSResource');

InvestmentsManager.getInvestmentsByIdUser = async (idUser, options = {}) => {
  const { logger } = options;

  const investmentsProject = await InvestmentsMSResource.getInvestmentsByIdUser(idUser);

  logger.info(`investments by id user ${JSON.stringify(investmentsProject)}`);

  console.log(investmentsProject);

  const investmentProject = await Promise.mapSeries(investmentsProject, async (investment) => {
    const { idProject, ...data } = investment;

    const project = await ProjectMSResource.getOneProject(idProject).catch((error) => {
      logger.error(`Error in projects Detail: param id ${idProject} ::=> ${error.stack} `);


      return undefined;
    });

    const { ...dataProject } = project;

    const [rewards] = await Promise.mapSeries(investmentsProject, async (a) => {
      const { idRewards, ...result } = a;

      const [detailRewards] = await ProjectMSResource.getRewardsById(idRewards).catch((error) => {
        logger.error(`Error in Project Detail: param id  ${idUser} ::=> ${error.stack} `);

        return undefined;
      });
      const { price } = detailRewards;

      return { ...result, price };
    });

    return {
      idProject,
      ...data,
      ...dataProject,
      rewards,
    };
  });

  return investmentProject;
};

InvestmentsManager.getProjectsInvestedByTheUser = async (usuarioId, options = {}) => {
  const { logger } = options;
  const investmentsDetail = await InvestmentsMSResource.getInvestmentsByIdUser(usuarioId);
  logger.info(`Investments details ${JSON.stringify(investmentsDetail)}`);
  const projectInvestedForUser = await Promise.mapSeries(investmentsDetail, async (investments) => {
    const { idProject } = investments;
    const projects = await ProjectMSResource.getOneProject(idProject).catch((error) => {
      logger.error(`Error in Project Detail: param id ${idProject} ::=> ${error.stack} `);

      return 0;
    });
    logger.info(`Projects details ${JSON.stringify(projects)}`);

    const { idUser } = projects;


    const detail = await UsersMSResource.getUsersById(idUser);

    projects.nameUser = detail.fullname;

    return { idProject, projects };
  });

  function removeDuplicates(originalArray, prop) {
    const newArray = [];
    const lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }

    return newArray;
  }
  const uniqueArray = removeDuplicates(projectInvestedForUser, 'idProject');
  console.log(`uniqueArray is: ${JSON.stringify(uniqueArray)}`);

  const pro = await Promise.mapSeries(uniqueArray, async (uniques) => {
    const { id, ...data } = uniques.projects;
    const { images } = uniques.projects;

    const detail = await InvestmentsMSResource.getInvestmentsbyProjectAndUser(usuarioId, id).catch((error) => {
      logger.error(`Error in Project Detail: param id ${id}, ${usuarioId} ::=> ${error.stack} `);

      return undefined;
    });

    const rewards = await Promise.mapSeries(detail, async (a) => {
      const { idRewards, ...result } = a;

      const [detailRewards] = await RewardsMSResource.getRewardsForId(idRewards).catch((error) => {
        logger.error(`Error in Project Detail: param id ${id} ::=> ${error.stack} `);

        return undefined;
      });

      const { price } = detailRewards;


      return {
        ...result,
        priceRewards: price,

      };
    });

    return {
      id, ...data, images, rewards,
    };
  });

  const detail = await Promise.mapSeries(pro, async (pros) => {
    const { rewards, ...other } = pros;

    const rewardsPrice = await Promise.mapSeries(rewards, async (r) => {
      const totalinvested = r.priceRewards;


      return totalinvested;
    });
    let sum = 0;
    rewardsPrice.forEach((total) => {
      sum += total;
    });

    return {
      ...other,
      rewards,
      totalInvested: sum,
    };
  });

  return detail;
};


InvestmentsManager.getInvestmentsByIdProject = async (idProject, options = {}) => {
  const { logger } = options;

  const investmentsProject = await InvestmentsMSResource.getInvestmentsByProject(idProject);

  logger.info(`investments by id project ${JSON.stringify(investmentsProject)}`);

  console.log(investmentsProject);
  const investmentProject = await Promise.mapSeries(investmentsProject, async (investment) => {
    const { ...data } = investment;

    const [rewards] = await Promise.mapSeries(investmentsProject, async (a) => {
      const { idRewards, ...result } = a;

      const [detailRewards] = await ProjectMSResource.getRewardsById(idRewards).catch((error) => {
        logger.error(`Error in Project Detail: param id ${id}, ${idUser} ::=> ${error.stack} `);

        return undefined;
      });
      const { price } = detailRewards;

      return {
        ...result, price,
      };
    });


    const { idUser } = investment;

    const users = await UsersMSResource.getUsersById(idUser).catch((error) => {
      logger.error(`Error in Users Detail: param id ${idUser} ::=> ${error.stack} `);

      return undefined;
    });

    logger.info(`Detail Users ${JSON.stringify(users)}`);

    const nameUser = users.fullname;

    return {
      ...data,
      rewards,
      nameUser,
    };
  });

  return investmentProject;
};
