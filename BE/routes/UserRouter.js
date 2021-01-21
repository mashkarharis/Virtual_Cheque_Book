// Express Initialize
const express = require('express');
const authenticModel = require('../model/authentic.model');
const { authentic } = require('../model/authentic.model');
const CustomerModel = require('../model/customer.model');
const router = express.Router()
const hashservice = require('../services/hashservice');
const generatepin = require('../services/pingenerationservice');



router.get('/', (req, res) => {
    res.send("User Accessed !!!")
}
);
//[2]
router.post('/authUser', (req, res) => {

    console.log(req.body);
    hashservice.hashpassword(req.body.login_pwd, (hash) => {
        var authenticData = {
            "login_username": req.body.login_username,
            "login_pwd": hash
        }
        authenticModel.authentic(authenticData).then((success) => {
            res.json({
                "success": true,
                "data": success
            });
            res.end();
        }).catch((failed) => {
            res.json({
                "success": false,
                "data": failed
            });
            res.end();
        });
    });
    
}
);
// [1]
router.post('/addUserCustomer', (req, res) => {

    hashservice.hashpassword(req.body.password, (hashed) => {
        console.log("Ok");
        var customer = [
            req.body.username,
            hashed + '',
            parseInt(req.body.account_no + ''),
            req.body.full_name + '',
            req.body.name_with_init + '',
            req.body.dob + '',
            req.body.created_date + '',
            req.body.NIC + '',
            req.body.gender + '',
            req.body.house_no + '',
            req.body.street + '',
            req.body.city + '',
            parseInt(req.body.postal_code + ''),
            generatepin(6),
            parseInt(req.body.contact_primary + ''),
            parseInt(req.body.contact_secondary + ''),
        ]
        console.log(customer);
        CustomerModel.addCustomer(customer).then((success) => {
            res.json({
                "success": true,
                "data": success
            });
            res.end();
        }).catch((failed) => {
            res.json({
                "success": false,
                "data": failed
            });
            res.end();
        });

    })


});



module.exports = router;