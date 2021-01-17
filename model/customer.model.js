var db = require('../config/database');
var dbFunc = require('../config/db-function');


function getCustomers() {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Customer',(error,rows,fields)=>{
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

function getCustomerById(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Customer WHERE customer_id = ?',[id.id],(error,rows,fields)=>{
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

