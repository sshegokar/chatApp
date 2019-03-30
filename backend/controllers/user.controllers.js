
var userService=require('../services/user.services');
var send=require('../middleWare/sendMailer')
var utility=require('../utility/utility')


// Create and Save a new user
exports.registerController = (req, res) => {
    // Validate request
    userService.registerService(req.body,(err,data) => {
        if(err){
            return res.status(400).send({
                error: err
            });
        }else{
            return res.status(200).send({
                data: data
            })
        }
    })
}
exports.loginController = (req, res) => {
    // Validate request
    userService.loginService(req.body,(err,data) => {
        if(err){
            return res.status(400).send({
                error: err
            });
        }else{
            return res.status(200).send({
                data: data
            })
        }
    })
}
exports.forgetPassController = (req, res) => {
    var responseResult ={}
    // Validate request
    userService.forgetService(req.body,(err,result) => {
        if(err){
            return res.status(400).send({
                error: err
            });
        }else{
            responseResult.success =true;
            responseResult.result=result;
              const payload ={
                  user_id:responseResult.result._id,

              }
              console.log(payload);
              const obj=utility.GenerateToken(payload);
              const url=`http://locahost:3000/#!/resetPassword/${obj.token}`;
              send.sendEmailFunction(url)
             
              res.status(200).send(url);   
            
        }
    })
}
exports.resetPassController = (req, res) => {
    // Validate request
    userService.resetPassService(req.body,(err,data) => {
        if(err){
            return res.status(400).send({
                error: err
            });
        }else{
            return res.status(200).send({
                data: data
            })
        }
    })
}
