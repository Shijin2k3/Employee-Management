const Employee=require('../models/employeeModel')
const ErrorHandler=require('../utils/errorHandler')
const catchAsyncError=require('../middlewares/catchAsyncError')
const APIFeatures=require('../utils/apiFeatures')

//get employees -api/v1/employees
exports.getEmployees= async(req,res,next)=>{

    const apiFeatures= new APIFeatures(Employee.find(),req.query).search 

    const employees = await apiFeatures.query;
    res.status(200).json({
        success:true,
        count:employees.length,
        employees,
    })
}


//post new employees -api/v1/employee/new
exports.newEmployee= catchAsyncError(async(req,res,next)=>{
  
   const employee=await Employee.create(req.body);
   res.status(201).json({
    success:true,
    employee
   })
 
})

//get single product  -api/v1/employee/:id
exports.getSingleEmployee=async(req,res,next)=>{
  const employee = await Employee.findById(req.params.id);
   if(!employee){
    
    return next(new ErrorHandler("employee not found",400))
   }
   res.status(201).json({
    success:true,
    employee
   })
}

//update employee -api/v1/employee/:id
exports.updateEmployee=async(req,res,next)=>{
  let employee=await Employee.findById(req.params.id);
  if(!employee){
    return res.status(404).json({
           success:false,
           message:"Employee not found"
   })
  }
   employee=await Employee.findByIdAndUpdate(req.params.id,req.body,{
   new:true,
   runValidators:true
  })
 res.status(200).json({
  success:true,
  employee
 })
}

//delete Employee-api/v1/employee/:id

exports.deleteEmployee=async(req,res,next)=>{
  let employee=await Employee.findById(req.params.id);
  if(!employee){
    return res.status(404).json({
           success:false,
           message:"Employee not found"
   })
  }
  employee=await Employee.findByIdAndDelete(req.params.id)
  res.status(200).json({
    success:true,
    message:"Employee deleted"
  })
}