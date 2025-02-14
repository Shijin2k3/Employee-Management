const Employee=require('../models/employeeModel')

exports.getEmployees= async(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"Employee API working successfully"
    })
}
exports.newEmployee= async(req,res,next)=>{
   const employee=await Employee.create(req.body);
   res.status(201).json({
    success:true,
    employee
   })
}