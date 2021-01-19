// Express Initialize
const express = require('express');
const authenticModel = require('../model/authentic.model');
const { authentic } = require('../model/authentic.model');
const CustomerModel = require('../model/customer.model');
const NotificationModel = require('../model/notification.model');
const router = express.Router()
const hashservice = require('../services/hashservice');
const generatepin = require('../services/pingenerationservice');


router.get('/', (req, res) => {
    res.send("Customer Accessed !!!")
}
);
//[3]
router.get('/getAllData/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    CustomerModel.getCustomerById(id).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
    });
}
);
//[4]
router.get('/getAllNotification/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    NotificationModel.getNotiById(id).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
    });
}
);

module.exports=router;