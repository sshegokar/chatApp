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
app.service('homeService',function($http){
    this.getAllUser=function(data){
        
        
        $http({
            method :'GET',
            url :'http://localhost:3000/getAllUser',
            data :data,
        }).then(
            function successCallback(response){
               
             
                var userid=response.data._id;
                var firstName=response.data.firstName
                // localStrorage.setItem("firstName",firstName);
                // localStrorage.setItem("userid",userid);
                
                
               
            },
            function errorCallaback(error){
                console.log("Invalid username");
                console.log(error);
                getAllUserMessage='EmaiId or Password Incorrect';
                
            }
        );
    }
});
