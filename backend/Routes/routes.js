const express = require('express'); 
var token=require('../middleWare/auth')      
const router = express.Router();
const user = require('../controllers/user.controllers.js');

    // Create a new user
    router.post('/register', user.registerController);
    router.post('/login', user.loginController);
    router.post('/forgetPassword', user.forgetPassController);
    router.post('/resetPassword', token.checkToken,user.resetPassController);

   
    
module.exports=router;