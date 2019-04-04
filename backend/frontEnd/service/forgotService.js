/******************************************************************************
 *  Execution        :   1. default node         cmd> node forgotService.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : forgotService.js
 *  @overview        : Chat Application
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.service('forgotService',function($http){
    this.forgotPassword=function(data){
        
        
        $http({
            method :'POST',
            url :'http://localhost:3000/forgetPassword',
            data :data,
        }).then(
            function successCallback(response){
               
                console.log("UserName is found");
                var userid=response.data._id;
                var email=response.data.email
                // localStrorage.setItem("email",email);
                // localStrorage.setItem("userid",userid);
                
                
               
            },
            function errorCallaback(error){
                console.log("Invalid username");
                console.log(error);
                loginMessage='EmaiId or Password Incorrect';
                
            }
        );
    }
});
