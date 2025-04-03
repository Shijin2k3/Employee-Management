const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');


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
        default:'employee'
        
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
   if(!this.isModified('password')){
    next()
   }
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
userSchema.methods.getResetToken=function(){
    //generate token
    const token=crypto.randomBytes(20).toString('hex');
    //generate hash and reset password
    this.resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');

    //set token expire time
    this.resetPasswordTokenExpire=Date.now() + 30 * 60 *1000;
    return token;
}

 let model=mongoose.model('User',userSchema);
 module.exports=model;