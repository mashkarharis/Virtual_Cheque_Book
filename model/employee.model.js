const db = require('../db/database');
var dbFunc = require('../db/db-function');

var EmployeeModel = {
    getEmps,
    getEmpById,
    getEmpsByStatus,
    addEmp,
    updateEmpStatus
}

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

function addEmp(emp) {
    //TODO: set "Employee" attribute appropriate to the data passing -- checkout ../document/emp_reg.txt 
    return new Promise((resolve,reject) => {
        db.query(`CALL emp_reg(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[emp],(error,rows,fields)=>{
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

function updateEmpStatus(emp) {
    return new Promise((resolve,reject) => {
        db.query(`CALL approve_acc(?)`,[emp.id],(error,rows,fields)=>{
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


module.exports = EmployeeModel;
