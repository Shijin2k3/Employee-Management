const app=require('./app');
const dotenv=require('dotenv');
const path=require('path');
const connectDatabase = require('./config/db');


dotenv.config({path:path.join(__dirname,"config/config.env")});
connectDatabase();

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})