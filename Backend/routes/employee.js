const express=require('express');
const { getEmployees, newEmployee } = require('../controllers/employeeController');
const router=express.Router();

router.route('/employees').get(getEmployees);
router.route('/employee/new').post(newEmployee);

module.exports=router;