var db = require('../config/database');
var dbFunc = require('../config/db-function');


function getNotiById(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Notification where to_id = ?', [id.id],(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });  
}

function getNotiByIdWStatus(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Notification where to_id = ? and status = ?', [id.id, id.status],(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });  
}
