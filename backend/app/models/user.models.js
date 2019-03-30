const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const saltRounds = 10;
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



user_model.prototype.save = ((data, callback) => {
    user.findOne({
        "email": data.email
    }, (err, result) => {
        if (err) {
            console.log("error", data.email);
            callback(err);

        }
        else {
            if (result != null) {
                callback('email already registered');
            } else {
                data.password = bcrypt.hashSync(data.password, saltRounds)
                const register_model = new register(data);
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

user_model.prototype.login = (body, callback) => {
    user.findOne({
        "email": body.email
    }, (err, data) => {
       
        if (err) {
            callback(err);
        } else if (data != null) {
             
            bcrypt.compare(body.password, data.password).then(function (res) {
                if (res) {
                    console.log("login succesfully");
                    callback(null, res);
                } else {
                    console.log("Incorrect password");
                    callback("Incorrect password");
                }
            });
        } else {
            console.log("Invalid user");
            callback("invalid user");
        }
    })
}
user_model.prototype.forget = ((data, callback) => {
    user.findOne({
        "email": data.email
    }, (err, result) => {
        if (data.email==result.email) {
           
            callback(null,result);
        }
        else {
            callback(err)
        }
        })
    })

    user_model.prototype.resetPassword = ((data, callback) => {
        var pass= bcrypt.hashSync(data.password, saltRounds)
        
        user.updateOne({password:pass},
           
       
         (err, result) => {
            if (err) {
               
                callback(err);
            }
            else {
                console.log("Reseted your Password");
                return callback(null,data)
            }
            })
        })
    


module.exports = new user_model;
