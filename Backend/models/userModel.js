const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


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
        maxlength:[8,'Password cannot exceed 8 characters'],
        select:false
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
userSchema.methods.getJwtToken=function(){
     return jwt.sign({id:this.id},process.env.JWT_SECRET,{
     expiresIn:process.env.JWT_EXPIRES_TIME
   })
}
userSchema.methods.isValidPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

 let model=mongoose.model('User',userSchema);
 module.exports=model;