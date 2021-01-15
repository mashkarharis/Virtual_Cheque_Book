// Express Initialize
const express=require('express')
const router=express.Router()

router.get('/', (req,res)=> {
    res.send("You Visited /customer/");
});


module.exports=router;