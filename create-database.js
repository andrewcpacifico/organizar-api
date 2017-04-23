const fs = require('fs');
const mysql = require('mysql');

const config = require('./src/config');
const sql = fs.readFileSync('create-database.sql', 'utf-8');

class Connection {
  constructor() {
    this.pool = null;
  }

  init() {
    this.pool = mysql.createPool(config.db);
  }

  acquire() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }

        resolve(connection);
      });
    });
  }
}

const conn = new Connection();
conn.init();

conn.acquire().then((con) => {
  con.query(sql, (err, result) => {
    con.release();

    if (err) {
      console.log(err);
      console.log({status: 1, message: 'Error creating database.'});
    } else {
      console.log({status: 0, message: 'Database created.'});
    }
  });
});
