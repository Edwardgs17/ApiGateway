const express = require('express');
const log4js = require('log4js');
const routes = require('./app/routes');
const ErrorHandlerMiddleware = require('./app/utils/ErrorHandlerMiddleware');
const { PREFIX } = require('./app/config/AppConfig');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

const logger = log4js.getLogger('colfuding-gateway-ms');

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  logger.error(reason.stack);
});

app.use(PREFIX, routes);
app.use(ErrorHandlerMiddleware.MainHandler);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}${PREFIX}`);
});


module.exports = app;
