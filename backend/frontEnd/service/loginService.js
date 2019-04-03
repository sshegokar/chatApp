/******************************************************************************
 *  Execution        :   1. default node         cmd> node forgotController.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : forgotController.js
 *  @overview        : Chat Application
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
 app.service('loginservice',function($http){
     this.login=function(data,$scope){
         $http({
             method :'POST',
             url :'http//localhost:3000/login',
             data :data,
         }).then(
             function successCallback(responce){
                 console.log("bbbbbbbbb",responce);
                 
                 console.log("Login successfull at loginService in client side");
                 var userid=responce.data.message[0]._id;
                 var fName=responce.data.message[0].firstName
                 console.log("fname-----",fName);
                 
                 var email=responce.data.email;
                 var token=responce.data.token;
                 localStrorage=setItem("userid",userid);
                 localStrorage=setItem("fName",firstName);
                 localStrorage=setItem("email",email);
                 localStrorage=setItem("token",token);
                 
                
             },
             function errorCallaback(responce){
                 console.log("register Unsuccessful please check your username or Password");
                 console.log(responce);
                 $scope.loginMessage='EmaiId or Password Incorrect';
                 
             }
         );
     }
 });
