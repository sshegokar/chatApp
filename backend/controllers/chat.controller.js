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
var chatService = require('../services/chat.services');
// Create and Save a new user
exports.chatController = (req, callback) => {
    // Validate request
    try {
       
        chatService.chatService(req, (err, data) => {
            
            if (err) {
                callback(err)
                
            } else {
                console.log("controller data",data);
                
                callback(null,data)
            }
        })
    }
    catch (e) {
        console.log("Error");
        

    }
}
exports.getMsgController = (req, res) => {
    var responseResult = {}
    //validate request
    chatService.getMsgService(req ,(err, data) => {
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