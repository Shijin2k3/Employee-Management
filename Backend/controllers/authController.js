const catchAsyncError = require('../middlewares/catchAsyncError');
const catchASyncError=require('../middlewares/catchAsyncError')
const User=require('../models/userModel');
const sendEmail = require('../utils/email');
const ErrorHandler=require('../utils/errorHandler')
const crypto=require('crypto')

const sendToken=require('../utils/jwt');
//register user -api/v1/register
exports.registerUser=catchASyncError(async(req,res,next)=>{

    const {name,email,password}=req.body;
    const user= await User.create({
        name,
        email,
        password
    })
    
    sendToken(user,201,res)

})
//login user -api/v1/login

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
//logout -api/v1/logout
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
//forgot password api/v1/password/forgot
exports.forgotPassword=catchAsyncError(async(req,res,next)=>{
   const user =await User.findOne({email:req.body.email});

   if(!user){
    return next(new ErrorHandler('User not Found with this email',404))
   }
   const resetToken =  user.getResetToken();
   await user.save({validateBeforeSave:false})

   //Create reset url
   const resetUrl=`${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`

   const message=`Your password reset token url is as follows \n \n 
    ${resetUrl} \n \n If you has not requested this email,then ignore it.`

    try{

        sendEmail({
            email:user.email,
            subject:'EMS Passwor Recovery',
            message
        })
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email}`
        })

    }catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordTokenExpire=undefined;
        await user.save({validateBeforeSave:false})
        return next(new ErrorHandler(error.message),500)
    }

})
//reset password-api/v1/password/reset/:token

exports.resetPassword= catchASyncError(async (req,res,next) =>{
 const resetPasswordToken=crypto.createHash('sha256').update(req.params.token).digest('hex')
 const user = await User.findOne({
    resetPasswordToken,
    resetPasswordTokenExpire:{
        $gt:Date.now()
    }
})
 if(!user){
    return next(new ErrorHandler('Password reset token is invalid or expired'))
 }
 if(req.body.password !== req.body.confirmPassword){
    return next(new ErrorHandler('Password does not match'))
 }
 user.password=req.body.password;
 user.resetPasswordToken=undefined
 user.resetPasswordTokenExpire=undefined
 await user.save({validateBeforeSave:false})

 sendToken(user,201,res)
})

//Get user profile 
exports.getUserProfile=catchAsyncError(async(req,res,next)=>{
    const user = User.findById(req.user.id)
    res.status(200).json({
        success:true,
        user
    })
})
//change Password -api/v1/password/change
exports.changePassword = catchAsyncError(async(req,res,next)=>{
    const { oldPassword, password } = req.body;

    // Validate input
    if (!oldPassword || !password) {
        return next(new ErrorHandler('Please provide both old and new passwords', 400));
    }


    const user = await User.findById(req.user.id).select('+password')

    //check old password 
    if(!(await user.isValidPassword(oldPassword))){
       return next(new ErrorHandler('Old password is incorrect',401)) 
    }
    //assigning new password
    user.password =password;
    await user.save();
    res.status(200).json({
        success:true,
        
    })
})
//update profile
exports.updateProfile = catchAsyncError(async(req,res,next)=>{
    const newUserData={
        name:req.body.name,
        email:req.body.email
    }
    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,
        runValidators: true,

    })

    res.status(200).json({
        success:true,
        user
    })


})

//Admin : Get all users
exports.getAllUsers=catchAsyncError(async(req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users
    })
})
//Admin get specific user
exports.getUser=catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler(`User not found with this id ${req.params.id}`,404))
    }
    res.status(200).json({
        success:true,
        user
    })
})
//Admin Update User
exports.updateUser = catchAsyncError(async(req,res,next)=>{
     const newUserData={
        name:req.body.name,
        email:req.body.email,
        role:req.body.role
    }
    const user = await User.findByIdAndUpdate(req.params.id,newUserData,{
        new:true,
        runValidators: true,

    })

    res.status(200).json({
        success:true,
        user
    })
})
//Admin delete user
exports.deleteUser=catchAsyncError(async(req,res,next)=>{
  const user = await User.findById(req.params.id)
  if(!user){
        return next(new ErrorHandler(`User not found with this id ${req.params.id}`,404))
    }
    await user.remove();
    res.status(200).json({
        success:true,
    })
})