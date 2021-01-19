const db = require('../db/database');
var dbFunc = require('../db/db-function');

var CustomerModel = {
    getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomerStatus,
    updateCustomerPinForget,
    updateCustomerPin
}

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
        db.query('SELECT * FROM Customer WHERE customer_id = ?',id,(error,rows,fields)=>{
            if(!!error || rows[0]==null) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });  
}

function addCustomer(customer) {
    
    //TODO: set "user" attribute appropriate to the data passing -- checkout ../document/user_reg.txt 
    return new Promise((resolve,reject) => {
        db.query(`CALL user_reg(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,customer,(error,rows,fields)=>{

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

function updateCustomerStatus(customer) {
    return new Promise((resolve,reject) => {
        db.query(`CALL approve_acc(?)`,[customer.id],(error,rows,fields)=>{
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

function updateCustomerPinForget(customer) {
    return new Promise((resolve,reject) => {
        db.query(`CALL set_pin_forget(?)`,[customer.id],(error,rows,fields)=>{
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

function updateCustomerPin(customer) {
    return new Promise((resolve,reject) => {
        db.query(`CALL update_pin(?, ?)`,[customer.id, customer.pin],(error,rows,fields)=>{
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

module.exports = CustomerModel;