const express=require('express');
const app=express();
const employees=require('./routes/employee')

app.use('/api/v1/',employees)



module.exports=app