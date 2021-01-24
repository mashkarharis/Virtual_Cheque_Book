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
    updateChequeToRefund,
    setChecktopass,
    setChecktoret,
    getChequesByEID
}


function setChecktopass(chid,eid){
    return new Promise((resolve,reject) => {
        db.query('UPDATE Cheque SET status="APPROVED" , evaluator_id=? WHERE cheque_id=?',[parseInt(eid),parseInt(chid)],(error,rows,fields)=>{
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

function setChecktoret(chid,eid){
    return new Promise((resolve,reject) => {
        db.query('UPDATE Cheque SET status="RETURNED" , evaluator_id=? WHERE cheque_id=?',[parseInt(eid),parseInt(chid)],(error,rows,fields)=>{
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

function getChequesByEID(id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Cheque where evaluator_id = ?', id,(error,rows,fields)=>{
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

function getChequesByIDWStatus(stat) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM Cheque where status = ?',stat,(error,rows,fields)=>{
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
    console.log("---"+cheque);
    //TODO: set "Cheque" attribute appropriate to the data passing -- checkout ../document/add_cheque.txt 
    return new Promise((resolve,reject) => {
        var querystring="insert into Cheque (sender_id,receiver_id,amount,status,date,note) values (?,?,?,?,?,?)"
        db.query(querystring,cheque,(error,rows,fields)=>{
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