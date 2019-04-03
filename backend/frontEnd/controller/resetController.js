/******************************************************************************
 *  Execution        :   1. default node         cmd> node resetController.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : resetController.js
 *  @overview        : where is going the next define the path
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.controller('resetController',function($scope,$location,resetService){
    $scope.resetPassword=function(){
        var data ={
            
            'newPassword':$scope.newPassword,
            'confirmPassword' :$scope.confirmPassword,
        }
        $scope.go=function(path){
            $location.path("/resetPassword");
        };
        $scope.go2=function(path)
        {
            $location.path("/login");
        };
        console.log(data);
        resetService.resetPassword(data);
    }
}); 
   