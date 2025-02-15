const Employee=require('../models/employeeModel')

exports.getEmployees= async(req,res,next)=>{
    const employees = await Employee.find();
    res.status(200).json({
        success:true,
        message:"Employee API working successfully",
    })
}
exports.newEmployee= async(req,res,next)=>{
  try{  
   const employee=await Employee.create(req.body);
   res.status(201).json({
    success:true,
    employee
   })
  }catch(err){
    console.error(err);
    res.status(400).json({
        success:false,
        message:"Employee is not created",
        error: err.message
    })
  }
}