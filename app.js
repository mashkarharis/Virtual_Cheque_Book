// Initialize Express
const express=require('express');
const app=express();

// Route Files
const userRouter=require('./routes/UserRouter');
const staffRouter=require('./routes/StaffRouter');
const customerRouter=require('./routes/CustomerRouter');


// Redirect to router files
app.use('/user',userRouter);
app.use('/staff',staffRouter);
app.use('/customer',customerRouter);



// Start Server
const config = require('./config/default.json');
const port = config.host.port

app.listen(port,()=>{
    console.log('App started on port : '+port);
})
   