var userModel = require('../app/models/user.models');


exports.registerService = (data, callback) => {
    userModel.save(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result)
        }
    })
}
exports.loginService = (data, callback) => {
    userModel.login(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result)
        }
    })
}




exports.forgetService = (data, callback) => {
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


exports.resetPassService = (data, callback) => {
    userModel.resetPassword(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            console.log("services:::", result);

            callback(null, result)
        }
    })
}