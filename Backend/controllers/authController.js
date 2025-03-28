const catchASyncError=require('../middlewares/catchAsyncError')
const User=require('../models/userModel')
const ErrorHandler=require('../utils/errorHandler')

const sendToken=require('../utils/jwt');
//register user
exports.registerUser=catchASyncError(async(req,res,next)=>{

    const {name,email,password}=req.body;
    const user= await User.create({
        name,
        email,
        password
    })
    
    sendToken(user,201,res)

})

exports.loginUser=catchASyncError(async(req,res,next)=>{
    const {email,password}=req.body
    if(!email || !password){
       return next(new ErrorHandler('Please enter email & password',400))
    }
    //finding user database
    const user = await User.findOne({email}).select('+password');
    
    if(!user){
        return next(new ErrorHandler('Invalid email or password',401))
    }
    
    if(!await user.isValidPassword(password)){
        return next(new ErrorHandler('Invalid email or password',401))
    }

      sendToken(user,201,res)
})
