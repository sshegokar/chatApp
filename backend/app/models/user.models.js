/******************************************************************************
 *  Execution        :   1. default node         cmd> node user.models.js 
 *  Purpose          : Initialize and define the schema of the database
 *
 *  @file            : user.models.js
 *  @overview        : Perform the create and read operation on the schema 
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 30/03/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const saltRounds = 10;
//initialize the schema 
const usersSchema = mongoose.Schema({
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },

},
    {
        timestamps: true
    });

var user = mongoose.model('user', usersSchema);
function user_model() {
}
//validate the data and save the data 
user_model.prototype.save = ((data, callback) => {
    user.findOne({
        "email": data.email
    }, (err, result) => {
        if (err) {
            console.log("error", data.email);
            callback(err);
        }
        else {
            //checking user registered or not if not save the user data
            if (result !== null) {
                callback('email already registered');
            } else {
                data.password = bcrypt.hashSync(data.password, saltRounds)

                const register_model = new user(data);
                register_model.save((err, result) => {
                    if (err) {
                        callback(err);
                    }
                    else {
                        console.log("Registered successful..");
                        return callback(null, result);
                    }
                })
            }
        }

    })
})
//find the user already present or not if user is present login the board.
user_model.prototype.login = (body, callback) => {
    console.log("ertgr",body);
    user.findOne({
        "email": body.email
    }, (err, data) => {

        if (err) {
            callback(err);
        } else if (data != null) {
            console.log("ghre",data);
            
            // compare the encrypted password using comapare method 
            bcrypt.compare(body.password, data.password, function (err, result) {
                if (err) {
                    return callback(err)
                } else {
                  //  console.log("login successfully",data);
                    
                    callback(null,data);
                }
            });
        } else {
            console.log("Invalid user");
            callback("invalid user");
        }
    })
}





//find the user already present or not
user_model.prototype.forget = ((data, callback) => {
    user.findOne({
        "email": data.email
    }, (err, result) => {
        if (data.email == result.email) {

            callback(null, result);
        }
        else {
            callback(err)
        }
    })
})
//update the user password 
user_model.prototype.resetPassword = ((data, callback) => {
    var pass = bcrypt.hashSync(data.password, saltRounds)
    console.log(pass);
    user.updateOne({}, { password: pass },
        (err, result) => {
            if (err) {
                callback(err);
            }
            else {
                console.log("Reseted your Password");
                callback(null, result)
            }
        })
})
user_model.prototype.getAllUsers = (callback) => {
    user.find({}, (err, result) => {
        if (err) {
            return callback(err);
        } else {
          //  console.log("data", result);

            return callback(null, result);
        }
    });
}



module.exports = new user_model;
