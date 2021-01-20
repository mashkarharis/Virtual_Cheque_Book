const db = require('../db/database');
var dbFunc = require('../db/db-function');

var ChequeModel = {
    getCheques,
    getChequesByRID,
    getChequesBySID,
    getChequesByIDWStatus,
    getChequesByReceiver,
    addCheque,
    updateChequeToPass,
    updateChequeToEval,
    updateChequeToRefund
}

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


function getChequesByRID(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Cheque where receiver_id = ?', id,(error,rows,fields)=>{
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
function getChequesBySID(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Cheque where sender_id = ?', id,(error,rows,fields)=>{
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

function getChequesByReceiver(id) {
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

function addCheque(cheque) {
    //TODO: set "Cheque" attribute appropriate to the data passing -- checkout ../document/add_cheque.txt 
    return new Promise((resolve,reject) => {
        db.query(`CALL add_cheque(?,?,?,?,?)`,cheque,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
       });
    });
}

function updateChequeToPass(cheque) {
    return new Promise((resolve,reject) => {
        db.query(`CALL update_cheque_status(?, ?)`,[cheque.id, "PASSED"],(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
       });
    });
}

function updateChequeToEval(cheque_id) {
    return new Promise((resolve,reject) => {
        db.query(`CALL update_cheque_status(?, ?)`,[cheque_id, "EVALUATING"],(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
       });
    });
}

function updateChequeToRefund(cheque_id) {
    return new Promise((resolve,reject) => {
        db.query(`CALL update_cheque_status(?, ?)`,[cheque_id, "REFUNDED"],(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
       });
    });
}

module.exports = ChequeModel;