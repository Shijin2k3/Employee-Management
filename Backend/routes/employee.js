const express=require('express');
const { getEmployees, newEmployee, getSingleEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const router=express.Router();

router.route('/employees').get(getEmployees);
router.route('/employee/new').post(newEmployee);
router.route('/employee/:id').get(getSingleEmployee);
router.route('/employee/:id').put(updateEmployee)
router.route('/employee/:id').delete(deleteEmployee);
module.exports=router;