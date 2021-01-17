var db = require('../config/database');
var dbFunc = require('../config/db-function');


function getEmps() {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Employee',(error,rows,fields)=>{
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

function getEmpById(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Employee where emp_id = ?', [id.emp_id],(error,rows,fields)=>{
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

function getEmpsByStatus() {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Employee',(error,rows,fields)=>{
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