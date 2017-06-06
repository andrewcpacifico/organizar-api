const mysql = require('mysql');

const config = require('../config');
const logger = require('./logger');

const DbHelper = {};

let connectionPool;

function getConnection() {
  if (connectionPool === undefined) {
    connectionPool = mysql.createPool(config.db);
  }

  return new Promise((resolve, reject) => {
    connectionPool.getConnection((err, connection) => {
      if (err) {
        logger.error('Error openning connection.', err);
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
}

/**
 * Performs a query on database.
 *
 * @param {String} sql The sql query to run.
 * @param {Array} values An array of values to escape before send the query to
 *   database.
 * @return {Promise} A Promise that resolves with the query results.
 */
DbHelper.query = function query(sql, values) {
  return new Promise((resolve, reject) => {
    getConnection().then((connection) => {
      connection.query(sql, values, (err, result) => {
        if (err) {
          logger.error('Error executing query.', err);
          reject(err);
        } else {
          resolve(result);
        }

        connection.release();
      });
    }).catch((err) => {
      logger.error('Db.getConnection failed.', err);
      reject(err);
    });
  });
};

module.exports = DbHelper;
