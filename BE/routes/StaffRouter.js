// Express Initialize
const express=require('express');
const CustomerModel = require('../model/customer.model');
const EmployeeModel = require('../model/employee.model');
const hashservice = require('../services/hashservice');
const router=express.Router()

router.get('/', (req,res)=> {
    res.send("You Visited /staff/");
});

router.get('/getAllData/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    EmployeeModel.getEmpById(id).then((success) => {
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

router.post('/addUserStaff', (req, res) => {

    console.log(req.body);

    hashservice.hashpassword(req.body.password, (hashed) => {
        console.log("Ok");
        var staff = [
            req.body.username,
            hashed + '',
            req.body.fname + '',
            req.body.name_with_init + '',
            req.body.dob + '',
            req.body.created_date + '',
            req.body.NIC + '',
            req.body.gender + '',
            req.body.house_no + '',
            req.body.street + '',
            req.body.city + '',
            parseInt(req.body.postal_code + ''),
            parseInt(req.body.contact_primary + ''),
            parseInt(req.body.contact_secondary + ''),
        ]
        console.log(staff);
        EmployeeModel.addEmp(staff).then((success) => {
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


router.get('/getAllData', (req, res) => {
    CustomerModel.getCustomers().then((success) => {
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

router.get('/getAllDataPending', (req, res) => {
    CustomerModel.getCustomersPending().then((success) => {
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

router.get('/approve_reject/:id/:to', (req, res) => {
    var to = req.params.to;
    var id = req.params.id;
    console.log(to);
    console.log(id);
    CustomerModel.approve_reject(to,id).then((success) => {
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

