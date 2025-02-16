const employees=require("../data/employees.json");
const Employee=require("../models/employeeModel");
const path=require("path");
const dotenv=require('dotenv');
const connectDatabase=require("../config/db")


dotenv.config({path:"Backend/config/config.env"})
connectDatabase()
const seedEmployees= async() =>{

    try{
    await Employee.deleteMany();
    console.log("Employees deleted successfully")
    await Employee.insertMany(employees);
    console.log("All employees added");
    }catch(error){
        console.log(error.message);
    }
    process.exit();

}  
seedEmployees(); 