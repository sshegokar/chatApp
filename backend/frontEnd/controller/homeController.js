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
app.controller('homeController',function($scope,homeService,SocketService){
   
        $scope.events = [];
        SocketService.on('socket', function(data) {
            $scope.events.push(data);
        })
     
    
    
    $scope.getAllUser=function(){
        var data ={
            
            'firstName':$scope.firstName,
             '_id' :$scope._id
            
        }
       
        console.log(data);
        homeService.getAllUser(data);
    }
}); 
   
    