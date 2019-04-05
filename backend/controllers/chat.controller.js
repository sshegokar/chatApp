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
exports.chatController = (req, res) => {
    // Validate request
    // try {
        chatService.chatService(req.body, (err, data) => {
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
    //}
    // catch (e) {
    //     console.log("Error");
        

    // }
}