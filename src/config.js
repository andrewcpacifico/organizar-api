const validEnvs = ['dev', 'prd'];
const env = validEnvs.indexOf(process.NODE_ENV) !== -1 ?
  process.NODE_ENV :
  'dev';
process.NODE_ENV = env;

const merge = require('merge');
const commonConfig = require('../config/config.all.js');
const envConfig = require('../config/config.' + env + '.js');

const config = merge.recursive(true, commonConfig, envConfig);

module.exports = config;
