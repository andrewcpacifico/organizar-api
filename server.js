const app = require('express')();

const config = require('./src/config');
const logger = require('./src/helpers/logger');
const router = require('./src/routes');

app.use('/v1', router);

app.listen(config.port, () => {
  logger.info(`server started on port ${config.port} (${config.env})`);
});
