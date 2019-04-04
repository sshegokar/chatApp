/******************************************************************************
 *  Execution        :   1. default node         cmd> node registerService.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : registerService.js
 *  @overview        : Chat Application
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 03/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.service('registerService',function($http){
    this.register=function(data){
        
        
        $http({
            method :'POST',
            url :'http://localhost:3000/register',
            data :data,
        }).then(
            function successCallback(response){
               
                console.log("Register successfull at registerService in client side");
               
                var fName=response.data.message.firstName;
                var lName=response.data.message.lastName;
                var mail=response.data.message.email;
                var Password=response.data.message.password;
              
                localStrorage.setItem("fName",fName);
                localStrorage.setItem("lName",lName);
                localStrorage.setItem("email",mail);
                localStrorage.setItem("password",Password);
                
               
            },
            function errorCallaback(error){
                console.log("register Unsuccessful please check your details");
                console.log(error);
                registerMessage='EmaiId or Password Incorrect';
                
            }
        );
    }
});
