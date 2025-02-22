const express=require('express');
const app=express();
const errorMiddleware=require('./middlewares/error')

app.use(express.json()); 
const employees=require('./routes/employee')


app.use('/api/v1/',employees)

app.use(errorMiddleware);



module.exports=app