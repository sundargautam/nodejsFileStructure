const express = require('express');
const app = express();
const appLoader = require('./loaders/apploader');
const global = require('./globalErrorHandler/global');
const router = require('./routes/login');
app.use('/api',router);
app.use((req,res,next)=>{
    next();
})
app.get('/other',(req,res)=>{

    throw new global("opps","2323");
})

app.use((error,req,res,next)=>{

    console.log(error.message);
})
appLoader(app);

