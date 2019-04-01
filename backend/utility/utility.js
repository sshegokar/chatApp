/******************************************************************************
 *  Execution        :   1. default node         cmd> node utility.js 
 *  Purpose          : Verify the request and send back the responce
 *
 *  @file            : utility.js
 *  @overview        : Verify the request and send back the responce
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 30/03/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
var jwt = require('jsonwebtoken');
module.exports={
    
    //create token and generate the responce
    GenerateToken(payload){
        const token=jwt.sign({payload},'secretkey',{expiresIn:'2h'})
        const obj={
            success :true,
            message :'Token Generated !!',
            token : token
        }
        return obj;
    }
}

