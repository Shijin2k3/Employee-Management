const express=require('express');
const { getEmployees, newEmployee, getSingleEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const router=express.Router();
const {isAuthenticatedUser, authorizeRoles}=require('../middlewares/authenticate')



router.route('/employees').get(isAuthenticatedUser,getEmployees);
router.route('/employee/new').post(isAuthenticatedUser,authorizeRoles('admin'),newEmployee);
router.route('/employee/:id').get(getSingleEmployee);
router.route('/employee/:id').put(updateEmployee)
router.route('/employee/:id').delete(deleteEmployee);
module.exports=router;