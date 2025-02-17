const Employee=require('../models/employeeModel')

//get employees -api/v1/employees
exports.getEmployees= async(req,res,next)=>{
    const employees = await Employee.find();
    res.status(200).json({
        success:true,
        count:employees.length,
        employees,
    })
}


//post new employees -api/v1/employee/new
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

//get single product  -api/v1/employee/:id
exports.getSingleEmployee=async(req,res,next)=>{
  const employee = await Employee.findById(req.params.id);
   if(!employee){
     return res.status(404).json({
            success:false,
            message:"Employee not found"
    })
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