'use strict';

const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'classmysql.engr.oregonstate.edu',
  user: 'cs340_scotellm',
  password: '4731',
  database: 'cs340_scotellm'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

module.exports = dbConn;