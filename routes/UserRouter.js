// Express Initialize
const express=require('express');
const CustomerModel = require('../model/customer.model');
const router=express.Router()
const hashservice = require('../services/hashservice');



router.get('/', (req,res)=> {
    res.send("User Accessed !!!")
}
);

router.post('/addUserCustomer', (req,res)=> {
    
    hashservice.hashpassword(req.body.password,(hashed)=>{
        console.log("Ok");
        var customer=[
            req.body.username,
            hashed+'',
            parseInt(req.body.account_no+''),
            req.body.full_name+'',
            req.body.name_with_init+'',
            req.body.dob+'',
            req.body.created_date+'',
            req.body.NIC+'',
            req.body.gender+'',
            req.body.house_no+'',
            req.body.street+'',
            req.body.city+'',
            parseInt(req.body.postal_code+''),
            2314,
            parseInt(req.body.contact_primary+''),
            parseInt(req.body.contact_secondary+''),
        ]
        console.log(customer);
        CustomerModel.addCustomer(customer).then((success)=>{
            res.json({
                "status": "Success",
                "data":success
            });
            res.end();
        }).catch((failed)=>{
            res.json({
                "status": "Failed",
                "data":failed
            });
            res.end();
        });        

    })
    


});


module.exports=router;