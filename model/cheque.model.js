var db = require('../config/database');
var dbFunc = require('../config/db-function');


function getCheques() {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Cheque',(error,rows,fields)=>{
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


function getChequesByID(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Cheque where sender_id = ?', [id.sender_id],(error,rows,fields)=>{
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

function getChequesByIDWStatus(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Cheque where sender_id = ? and status = ?',[id.user_id, id.status],(error,rows,fields)=>{
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

function getChequesByReciever(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Cheque where receiver_id = ?',[id.rec_id],(error,rows,fields)=>{
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