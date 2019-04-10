/******************************************************************************
 *  Execution        :   1. default node         cmd> node chat.models.js 
 *  Purpose          : Initialize and define the schema of the database
 *
 *  @file            : chat.models.js
 *  @overview        : Perform the create and read operation on the schema 
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 05/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
const mongoose = require('mongoose');

//initialize the schema 
const chatsSchema = mongoose.Schema({
    senderId:
    {
        required: true,
        type: String
    },
    receiverId:
    {
        required: true,
        type: String
    },
    message:
    {
        required: true,
        type: String
    }
},
    {
        timestamps: true
    });
var chat = mongoose.model('chat', chatsSchema);
function chat_model() {

}
//validate the data and save the data 
chat_model.prototype.save = ((data, callback) => {
    console.log(data);
    
    const chatInfo = new chat({
        'senderId': data.senderId,
         'receiverId': data.receiverId,
        'message': data.message
 
    })
    chatInfo.save((err, result) => {
        if (err) {
            callback(err);
        }
        else {
            console.log("save data",result);
            return callback(null, result);
        }
    })
    
    
})
chat_model.prototype.getAllMsg = (req,callback) => {
    chat.find({}, (err, result) => {
        if (err) {
            return callback(err);
        } else {
          //  console.log("data", result);

            return callback(null, result);
        }
    });
}
module.exports = new chat_model;

