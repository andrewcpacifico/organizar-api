const validEnvs = ['dev', 'prd'];
const env = validEnvs.indexOf(process.env.NODE_ENV) !== -1 ?
  process.env.NODE_ENV :
  'dev';
process.env.NODE_ENV = env;

const merge = require('merge');
const commonConfig = require('../config/config.all.js');
const envConfig = require('../config/config.' + env + '.js');

const config = merge.recursive(true, commonConfig, envConfig);
config.env = env;
config.port = process.env.PORT || 9998;

module.exports = config;
