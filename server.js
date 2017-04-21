const app = require('express')();
const router = require('./src/routes');

const config = {
  port: 9998,
  env: 'development',
};

app.use('/v1', router);

app.listen(9998, () => {
  console.info(`server started on port ${config.port} (${config.env})`);
});
