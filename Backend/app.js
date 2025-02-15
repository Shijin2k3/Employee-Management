const express=require('express');
const app=express();

app.use(express.json()); 
const employees=require('./routes/employee')


app.use('/api/v1/',employees)



module.exports=app