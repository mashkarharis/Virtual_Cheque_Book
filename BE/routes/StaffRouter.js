// Express Initialize
const express=require('express');
const EmployeeModel = require('../model/employee.model');
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

module.exports=router;

