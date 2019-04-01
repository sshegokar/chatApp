/******************************************************************************
 *  Execution        :   1. default node         cmd> node loginController.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : loginController.js
 *  @overview        : where is going the next define the path
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.controller('loginController',function($scope,$location,loginService){
    $scope.login=function(){
        var data ={
            
            'email':$scope.email,
            'password' :$scope.password,
        }
        $scope.go=function(path){
            $location.path("/login");
        };
        $scope.go2=function(path)
        {
            $location.path("/forgotPassword");
        };
        console.log(data);
        loginService.login(data);
    }
}); 
   
