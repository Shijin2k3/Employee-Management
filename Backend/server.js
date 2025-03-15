const app=require('./app');
const dotenv=require('dotenv');
const path=require('path');
const connectDatabase = require('./config/db');


dotenv.config({path:path.join(__dirname,"config/config.env")});
connectDatabase();

const PORT = process.env.PORT || 3000;

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`shutting down the server due to Unhandled rejection Error`)
    server.close(()=>{
        process.exit(1);
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`shutting down the server due to Uncaught Exception Error`)
    server.close(()=>{
        process.exit(1);
    })
})