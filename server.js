const app = require('express')();

const config = require('./src/config');
const router = require('./src/routes');

app.use('/v1', router);

app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`);
});
