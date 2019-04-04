/******************************************************************************
 *  Execution        :   1. default node         cmd> node resetService.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : resetService.js
 *  @overview        : Chat Application
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.service('resetService',function($http){
    this.resetPassword=function(data,$scope){
        
        $http({
            method :'POST',
            url :'http://localhost:3000/resetPassword',
            data :data,
            headers:{
                'token' :$scope.token
            }
        }).then(
            function successCallback(response){
                console.log("responce",response); 
                                      
            },
            function errorCallaback(error){
                console.log("error");
                console.log(error);
                resetMessage='Password Incorrect';
                
            }
        );
    }
});
