/******************************************************************************
 *  Execution        :   1. default node         cmd> node routes.js 
 *  Purpose          : Define the where to go next function
 *
 *  @file            : routes.js
 *  @overview        : Define the where to route data.
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 09/03/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
const express = require('express');
var token = require('../middleWare/auth')
const user = require('../controllers/user.controllers.js');
const chat=require('../controllers/chat.controller')
const router = express.Router();


router.post('/register', user.registerController);
router.post('/login', user.loginController);
router.post('/forgetPassword', user.forgetPassController);
router.post('/resetPassword', token.checkToken, user.resetPassController);
router.get('/getAllUser', user.getAllController);
router.get('/getAllMsg',chat.getMsgController);




module.exports = router;