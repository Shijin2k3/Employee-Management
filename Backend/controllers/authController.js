const catchAsyncError = require('../middlewares/catchAsyncError');
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

exports.logoutUser=(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true

    })
    .status(200).json({
        success:true,
        message:'Loggedout'
    })
}
exports.forgotPassword=catchAsyncError(async(req,res,next)=>{
   const user =await User.findOne({email:req.body.email});

   if(!user){
    return next(new ErrorHandler('User not Found with this email',404))
   }
   const resetToken =  user.getResetToken();
   user.save({validateBeforeSave:false})

   //Create reset url
   const resetUrl=`${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`

   const message=`Your password reset token url is as follows \n \n 
    ${resetUrl} \n \n If you has not requested this email,then ignore it.`

    try{

        

    }catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordTokenExpire=undefined;
        await user.save({validateBeforeSave:false})
        return next(new ErrorHandler(error.message),500)
    }

})
