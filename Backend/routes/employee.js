const express=require('express');
const { getEmployees, newEmployee, getSingleProduct, getSingleEmployee } = require('../controllers/employeeController');
const router=express.Router();

router.route('/employees').get(getEmployees);
router.route('/employee/new').post(newEmployee);
router.route('/employee/:id').get(getSingleEmployee);

module.exports=router;