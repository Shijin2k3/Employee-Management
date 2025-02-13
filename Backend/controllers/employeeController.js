exports.getEmployees= async(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"Employee API working successfully"
    })
}