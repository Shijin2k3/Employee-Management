const express=require('express');
const app=express();
const errorMiddleware=require('./middlewares/error')
const cookieParser=require('cookie-parser') 

app.use(express.json()); 
app.use(cookieParser());//install cookie-parser

const employees=require('./routes/employee')
const auth=require('./routes/auth')


app.use('/api/v1/',employees)
app.use('/api/v1/',auth)

app.use(errorMiddleware);



module.exports=app