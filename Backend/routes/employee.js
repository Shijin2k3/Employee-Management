const express=require('express');
const { getEmployees, newEmployee, getSingleProduct, getSingleEmployee, updateEmployee } = require('../controllers/employeeController');
const router=express.Router();

router.route('/employees').get(getEmployees);
router.route('/employee/new').post(newEmployee);
router.route('/employee/:id').get(getSingleEmployee);
router.route('/employee/:id').put(updateEmployee)

module.exports=router;