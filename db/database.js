const mysql = require('mysql');
const fs = require('fs');
const config = require('./../config/default.json');


module.exports = mysql.createPool({
    user: config.db.user,//'umaim64n3koovo8v',
    host: config.db.host,//'bq7l4yjndinfmy4tdyaa-mysql.services.clever-cloud.com',
    database: config.db.database,//'bq7l4yjndinfmy4tdyaa',
    port: config.db.port,//3306,
    password: config.db.password,//'ADZS2xBRWVwJzo84w7dW',
    insecureAuth : true
})





