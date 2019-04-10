/******************************************************************************
 *  Execution        :   1. default node         cmd> node user.controller.js 
 *  Purpose          : Method the validate the request and give the responce
 * perform the operation.
 *
 *  @file            : user.controller.js
 *  @overview        : validate the request and give the responce
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 30/03/2019
 *
 ******************************************************************************/
/**
 * require the required file 
 */
var userService = require('../services/user.services');
var send = require('../middleWare/sendMailer')
var utility = require('../utility/utility')


// Create and Save a new user
exports.registerController = (req, res) => {
    // Validate request
    try {
        userService.registerService(req.body, (err, data) => {
            if (err) {
                return res.status(400).send({
                    error: err
                });
            } else {
                return res.status(200).send({
                    data: data
                })
            }
        })
    }
    catch (e) {
        console.log("Error");


    }
}

//check users entered details is right or wrong 
exports.loginController = (req, res) => {
    // Validate request
    userService.loginService(req.body, (err, data) => {
        var response={};
        if (err) {
            response.status=false;
            response.error=err;
            return res.status(400).send(response);
        } else {
            response.status=true;
            response.result=data;
            console.log("data ",response);
            
            // console.log("daat",res.data);
            // console.log("daat",req.body);
            //console.log("daat",res)
            return res.status(200).send(response);
        }
    })
}

    
//check the entered email correct or not
exports.forgetPassController = (req, res) => {
    var responseResult = {}
    // Validate request
    /**
     * @method calling form services file
     */
    userService.forgetService(req.body, (err, result) => {
        if (err) {
            return res.status(400).send({
                error: err
            });
        } else {
            responseResult.success = true;
            responseResult.result = result;
            const payload = {
                user_id: responseResult.result._id,

            }
            console.log(payload);
            /**
             * @method  GenerateToken form file middleWare
             */
            const obj = utility.GenerateToken(payload);
            const url = `http://localhost:3000/#/resetPassword/${obj.token}`;
            send.sendEmailFunction(url)
            res.status(200).send(obj);

        }
    })
}

exports.resetPassController = (req, res) => {
    // Validate request
    userService.resetPassService(req.body, (err, data) => {
        if (err) {
            return res.status(400).send({
                error: err
            });
        } else {
            return res.status(200).send({
                data: data
            })
        }
    })
}
exports.getAllController = (req, res) => {
    var responseResult = {}
    //validate request
    userService.getAllService((err, data) => {
        if (err) {
            responseResult.success = false;
            return res.status(400).send({
                error: err
            });
        }
        else {
            responseResult.success = true;
           
            return res.status(200).send({
                data: data
            })
        }

    })
}
