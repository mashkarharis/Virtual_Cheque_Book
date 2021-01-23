const db = require('../db/database');
var dbFunc = require('../db/db-function');

var CustomerModel = {
    getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomerStatus,
    updateCustomerPinForget,
    updateCustomerPin,
    getCustomersPending,
    approve_reject
}

function getCustomers() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Customer', (error, rows, fields) => {
            if (!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {

                dbFunc.connectionRelease;
                resolve(rows);
            }
        });
    });
}

function approve_reject(to, id) {
    return new Promise((resolve, reject) => {
        console.log(to);
        console.log(id);
        queryval = 'Update User SET status=' + to + ' Where user_id=' + id;
        console.log(queryval);
        db.query(queryval, (error, rows, fields) => {
            if (!!error) {
                dbFunc.connectionRelease;
                console.log(error);
                reject(error);
            } else {

                dbFunc.connectionRelease;
                resolve(rows);
            }
        });
    });
}


function getCustomersPending() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Customer where customer_id in (select user_id from User where status="PENDING")', (error, rows, fields) => {
            if (!!error) {
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
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Customer WHERE customer_id = ?', id, (error, rows, fields) => {
            if (!!error || rows[0] == null) {
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
    return new Promise((resolve, reject) => {
        db.query(`CALL user_reg(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, customer, (error, rows, fields) => {

            if (!!error) {
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
    return new Promise((resolve, reject) => {
        db.query(`CALL approve_acc(?)`, [customer.id], (error, rows, fields) => {
            if (!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
        });
    });
}

function updateCustomerPinForget(id) {
    return new Promise((resolve, reject) => {
        db.query(`CALL set_pin_forget(?)`, id, (error, rows, fields) => {
            if (!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
        });
    });
}

function updateCustomerPin(id, pin) {
    return new Promise((resolve, reject) => {
        console.log(id + "-----" + pin);
        querystring='Update Customer SET pin='+pin+' Where customer_id='+id;
        console.log(querystring);
        db.query(querystring,(error, rows, fields) => {

            if (!!error) {
                dbFunc.connectionRelease;
                console.log(error)
                reject(error);
            } else {
                console.log(rows[0])
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
        });
    });
}

module.exports = CustomerModel;