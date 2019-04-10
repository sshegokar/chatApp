/******************************************************************************
 *  Execution        :   1. default node         cmd> node chat.services.js 
 *  Purpose          : Verify the request and send back the responce
 *
 *  @file            : chat.services.js
 *  @overview        : Verify the request and send back the responce
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 05/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
var chatModel = require('../app/models/chat.models');

//define the register services verify the request
exports.chatService = (data, callback) => {
    /**
     * @method call the save method to save the data
     */
    chatModel.save(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result)
        }
    })
}
exports.getMsgService = (req,callback) => {
    /**
     * @method getMsgService to verify the data 
     */
    chatModel.getAllMsg(req,(err, result) => {
        if (err) {
            console.log(result);
            
            callback(err);
        }
        else {
            callback(null, result)
        }
    })
}