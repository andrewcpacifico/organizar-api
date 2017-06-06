const merge = require('merge');

const commonConfig = require('../config/config.all.js');
const devConfig = require('../config/config.dev.js');
const prdConfig = require('../config/config.prd.js');

const config = {
  common: commonConfig,
  dev: devConfig,
  prd: prdConfig,
};

const validEnvs = ['dev', 'prd'];
const env = validEnvs.indexOf(process.env.NODE_ENV) !== -1 ?
  process.env.NODE_ENV :
  'dev';
process.env.NODE_ENV = env;

module.exports = merge.recursive(true, config.common, config[env]);
module.exports.env = env;
module.exports.port = process.env.PORT || 9998;
