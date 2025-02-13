const express=require('express');
const { getEmployees } = require('../controllers/employeeController');
const router=express.Router();

router.route('/employees').get(getEmployees);

module.exports=router;