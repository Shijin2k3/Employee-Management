const mongoose=require('mongoose');


const connectDatabase= async() =>{
    await mongoose.connect(process.env.DB_LOCAL_URI)
    .then(con =>{
        console.log(`MongoDB is connected to the host ${con.connection.host}`);
    }).catch((err) => {
        console.log("Connection Error",err)
    })
}
module.exports=connectDatabase;