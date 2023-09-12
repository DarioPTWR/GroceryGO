const pgp = require('pg-promise')(/* options */)
require('dotenv').config()

var local_db_key = process.env.LOCAL_DB;
var neon_db_key = process.env.NEON_DB;

const db = pgp(local_db_key);

module.exports = db;