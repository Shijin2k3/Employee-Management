const mongoose=require('mongoose');


const connectDatabase= async() =>{
    await mongoose.connect(process.env.DB_LOCAL_URI)
}