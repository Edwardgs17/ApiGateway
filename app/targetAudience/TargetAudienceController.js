const TargetAudienceController = module.exports;
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const TargetAudienceMSResource = require('../resources/TargetAudienceMSResource');

TargetAudienceController.getList = (req, res, next) => TargetAudienceMSResource.getListOfTargetAudiences()
  .then((response) => res.send(response))
  .catch((error) => next(new BaseError(error.message)));
