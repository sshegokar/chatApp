/******************************************************************************
 *  Execution        :   1. default node         cmd> node registerController.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : registerController.js
 *  @overview        : where is going the next define the path
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
    app.controller('registerController',function($scope,$location,$registerService){
        $scope.register=function(){
            var data ={
                'firstName':$scope.firstName,
                'lastName':$scope.lastName,
                'email':$scope.email,
                'password' :$scope.password,
                'confirmPassword':$scope.confirmPassword
            }
            $scope.go=function(path){
                $location.path("/login");
            };
            console.log(data);
            registerService.register(data);
        }
    });