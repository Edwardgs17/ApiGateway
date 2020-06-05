const UsersManager = module.exports;
const UsersMSResource = require('../resources/UsersMSResource');
const Token = require('../utils/Token');

UsersManager.login = async (body, logger) => {
  const user = await UsersMSResource.login(body, logger);
  if (user) {
    return { id: user.id, email: user.email, token: Token.create({ id: user.id, email: user.email }) };
  }

  return null;
};
