const express=require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserProfile, changePassword, updateProfile, getAllUsers, getUser, deleteUser, updateUser } = require('../controllers/authController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');
const router=express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/myprofile').get(isAuthenticatedUser,getUserProfile);
router.route('/password/change').put(isAuthenticatedUser,changePassword);
router.route('/update').put(isAuthenticatedUser,updateProfile)

//Admin routes
router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'),getAllUsers)
router.route('/admin/users/:id').get(isAuthenticatedUser,authorizeRoles('admin'),getUser)
router.route('/admin/users/:id').put(isAuthenticatedUser,authorizeRoles('admin'),updateUser)
router.route('/admin/users/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteUser)



module.exports=router;