// Initialize Express
const express=require('express');
const app=express();
var bodyParser = require('body-parser');
// Route Files
const userRouter=require('./routes/UserRouter');
const staffRouter=require('./routes/StaffRouter');
const customerRouter=require('./routes/CustomerRouter');

//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
// Add headers
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));

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
   