const mongoose=require('mongoose');
const bcrypt=require('bcrypt')


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Enter Name']
    },
    email:{
        type:String,
        required:[true,'Please Enter Email'],
        unique:true,
    
    },
    password:{
        type:String,
        required:[true,'Please Enter Password'],
        maxlength:[8,'Password cannot exceed 8 characters']
    },
    role:{
        type:String,
        default:'user'
    },
    resetPasswordToken:{
        type:String
    },
    resetPasswordTokenExpire:Date,
    createdAt:{
        type:Date,
        default:Date.now
    }
})
userSchema.pre('save',async function (next){
this.password = await bcrypt.hash(this.password,10)
})
 let model=mongoose.model('User',userSchema);
 module.exports=model;