/******************************************************************************
 *  Execution        :   1. default node         cmd> node auth.js 
 *  Purpose          : Method the verify the Generated token
 *  @file            : auth.js
 *  @overview        : verify the Generated token
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 30/03/2019
 *
 ******************************************************************************/
/**
 * require the jsonwebtoken
 */
var jwt = require('jsonwebtoken');
exports.checkToken = (req, res, next) => {
    var token = req.headers['token'];
    // decode token
    if (token) {
        //verify the token using verify method 
        jwt.verify(token, 'secretkey', (err, decoded) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Token is not valid'
                });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        // if there is no token return an error
        return res.send({
            success: false,
            message: 'No token provided.'
        });
    }
}