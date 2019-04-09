/******************************************************************************
 *  Execution        :   1. default node         cmd> node user.services.js 
 *  Purpose          : Verify the request and send back the responce
 *
 *  @file            : user.services.js
 *  @overview        : Verify the request and send back the responce
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 30/03/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
var userModel = require('../app/models/user.models');

//define the register services verify the request
exports.registerService = (data, callback) => {
    /**
     * @method call the save method to save the data
     */
    userModel.save(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result)
        }
    })
}
//define the register services verify the request
exports.loginService = (req, callback) => {
    /**
     * @method login to verify the result 
     */
    userModel.login(req, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            console.log("sfse",result);
            
          return  callback(null, result)
        }
    })
}

//define the register services verify the request
exports.forgetService = (data, callback) => {
    /**
     * @method forget to verify the data and store in the result 
     */
    userModel.forget(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            console.log("services:::", result);

            callback(null, result)
        }
    })
}

//define the register services verify the request
exports.resetPassService = (data, callback) => {
    /**
     * @method resetPassword to verify the data 
     */
    userModel.resetPassword(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            console.log("services:", result);

            callback(null, result)
        }
    })
}
exports.getAllService = (callback) => {
    /**
     * @method getAllService to verify the data 
     */
    userModel.getAllUsers((err, result) => {
        if (err) {
            console.log(result);
            
            callback(err);
        }
        else {
            callback(null, result)
        }
    })
}