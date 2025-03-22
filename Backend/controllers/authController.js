const catchASyncError=require('../middlewares/catchAsyncError')
const User=require('../models/userModel')
//register user
exports.registerUser=catchASyncError(async(req,res,next)=>{

    const {name,email,password}=req.body;
    const user= await User.create({
        name,
        email,
        password
    })
    res.status(201).json({
        success:true,
        user
    })

})
