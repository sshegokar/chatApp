/******************************************************************************
 *  Execution        :   1. default node         cmd> node loginService.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : loginService.js
 *  @overview        : Chat Application
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.service('loginService',function($http){
    this.login=function(data){
        
        
        $http({
            method :'POST',
            url :'http://localhost:3000/login',
            data :data,
        }).then(
            function successCallback(response){
               
                console.log("Login successfull at loginService in client side");
                var userid=response.data._id;
                var fName=response.data.firstName
              
                
                var email=response.data.email;
                var token=response.data.token;
                localStrorage.setItem("userid",userid);
                localStrorage.setItem("fName",fName);
                localStrorage.setItem("email",email);
                localStrorage.setItem("token",token);
                
               
            },
            function errorCallaback(error){
                console.log("register Unsuccessful please check your details");
                console.log(error);
                loginMessage='EmaiId or Password Incorrect';
                
            }
        );
    }
});
