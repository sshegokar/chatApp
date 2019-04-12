
  /******************************************************************************
 *  Execution        :   1. default node         cmd> node forgotController.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : forgotController.js
 *  @overview        : where is going the next define the path
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.controller('forgotController',function($scope,$location,forgotService){
    $scope.forgotPassword=function(){
        try{
        var data ={
            
            'email':$scope.email,
            
        }
        $scope.go=function(path){
            $location.path("/forgotPassword");
        };
        $scope.go2=function(path)
        {
            $location.path("/login");
        };
        console.log(data);
        forgotService.forgotPassword(data);
    }
    catch(e){
        console.log(error);
        
    }
    }

}); 
   