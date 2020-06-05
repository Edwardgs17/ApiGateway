const PaymentsManager = module.exports;
const PaymentsMSResource = require('../resources/PaymentsMSResource');
const InvestmentsMSResource = require('../resources/InvestmentsMSResource');
const ProjectsMSResource = require('../resources/ProjectsMSResource');
const RewardsMSResource = require('../resources/RewardsMSResource');

PaymentsManager.create = async (body, logger) => {
  const { idUser, idRewards, ...payment } = body;
  const sku = idUser + idRewards;
  const pay = { sku, ...payment };

  return PaymentsMSResource.create(pay, logger);
};

PaymentsManager.success = async (body, logger) => {
  const { url, ...investment } = body;
  const { success } = await PaymentsMSResource.success(url, logger).catch(() => undefined);
  console.log({ success });

  if (success) {
    await InvestmentsMSResource.create({ ...investment });
    const { idProject, idRewards } = { ...investment };
    const [reward] = await RewardsMSResource.getRewardsForId(idRewards);
    const { price } = reward;
    const project = await ProjectsMSResource.getOneProject(idProject);
    let { funding } = project;
    funding += price;
    if ((funding) > project.minimal_cost) {
      await ProjectsMSResource.updateProjectById(idProject, { funding, financing: true });
    }
    await ProjectsMSResource.updateProjectById(idProject, { funding });

    return { success };
  }

  return { success };
};

PaymentsManager.payout = async (payout, logger) => {
  const senderBatchId = Math.random().toString(36) + Math.random().toString(36);
  const note = '<h1>has retirado un fondo de tu proyecto</h1>';
  const emailSubject = 'has retirado un fondo';
  const {
    value,
    idProject,
    senderItemId,
    ...otherData
  } = payout;
  const project = await ProjectsMSResource.getOneProject(idProject);
  let { funding } = project;
  funding -= value;
  if (funding > 0) {
    const { success } = await PaymentsMSResource.payout({
      value,
      senderItemId,
      senderBatchId,
      note,
      emailSubject,
      ...otherData,
    }, logger);
    if (success) {
      await ProjectsMSResource.updateHomework(senderItemId, { withdrawal: true });
      await ProjectsMSResource.updateProjectById(idProject, { funding });
    }

    return { success };
  }
  const { success } = await PaymentsMSResource.payout({
    value: funding < 0 ? value - (funding * -1) : value,
    senderItemId,
    senderBatchId,
    note,
    emailSubject,
    ...otherData,
  }, logger);
  if (success) {
    await ProjectsMSResource.updateHomework(senderItemId, { withdrawal: true });
    await ProjectsMSResource.updateProjectById(idProject, { funding: 0, financing: false });
  }

  return { success };
};
